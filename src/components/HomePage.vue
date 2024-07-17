<template>
    <MainSection>
        <FormContent>
            <Input v-model="newTask" placeholder="Tasks (e.g., Reading Book at 6PM...)" />
            <i @click="AddTodo" class="fa-solid fa-square-plus"></i>
        </FormContent>
        <FormContent>
            <TaskPage :tasks="TodoData" @delete-Task="deleteTask" @edit-task="editTask" @toggle-completed="toggleCompletedTask" />
        </FormContent>
    </MainSection>
</template>

<script>
import { MainSection, FormContent, Input } from '@/StyledComponents/StyledComponents';
import TaskPage from './TaskPage.vue';
import { useToast } from 'vue-toastification';
import { confetti } from '@tsparticles/confetti';

export default {
    components: {
        MainSection,
        FormContent,
        Input,
        TaskPage,
    },
    data() {
        return {
            newTask: '',
            TodoData: [],
            editIndex: null,
        };
    },
    methods: {
        saveDB() {
            localStorage.setItem('TodoData', JSON.stringify(this.TodoData));
        },
        AddTodo() {
            if (this.newTask.trim()) {
                if (this.editIndex !== null) {
                    this.TodoData[this.editIndex].text = this.newTask;
                    this.editIndex = null;
                    useToast().warning("Task Updated!");
                    
                } else {
                    this.TodoData.push({ text: this.newTask, completed: false,  timestamp:this.timeStamp() });
                    useToast().success("Task Added");
                }
                this.newTask = '';
                this.saveDB();
            }
        },
        loadDB() {
            const todos = localStorage.getItem('TodoData');
            if (todos) {
                this.TodoData = JSON.parse(todos);
            } else {
                this.TodoData = []; // Initialize with an empty array if no data found
            }
        },
        mounted() {
            this.loadDB();
        },
        deleteTask(index) {
            this.TodoData.splice(index, 1);
            this.saveDB();
            useToast().error("Task Deleted!");
        },
        editTask(index) {
            this.newTask = this.TodoData[index].text;
            this.editIndex = index;
        },
        toggleCompletedTask(index) {
            const blackConfetti = confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
            this.TodoData[index].completed = !this.TodoData[index].completed;
            this.saveDB();
            blackConfetti;
        },

        timeStamp() {
            const date = new Date();
            return date.toLocaleString();
        }
    },
    mounted() {
        this.loadDB();
    },
};
</script>

