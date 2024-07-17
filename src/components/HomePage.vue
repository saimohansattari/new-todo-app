<template>
    
        <MainSection>
            <FormContent >
                <Input v-model="newTask"  placeholder="Tasks(Reading Book at 6PM..)"/>
                <i @click="AddTodo(newTask)" class="fa-solid fa-square-plus"></i>                
            </FormContent>

            <FormContent>
                <TaskPage :tasks = "TodoData" @delete-Task = "deleteTask" @edit-task = 'editTask' />
            </FormContent>
        </MainSection>
        
    
</template>
  
<script>

import { MainSection, FormContent, Input,  } from '@/StyledComponents/StyledComponents';
import TaskPage from './TaskPage.vue'
import { useToast } from 'vue-toastification';



  export default {

    components : {
        MainSection,
        FormContent,
        Input,
        // TaskList,
        TaskPage,
    },


    data() {
        return {
            newTask : '',
            TodoData : [],
            editIndex : null,
        }
    },

    methods : {
        saveDB(){
            localStorage.setItem('TodoData', JSON.stringify(this.TodoData))
        },

        AddTodo() {
            if(this.newTask.trim()){
                if(this.editIndex !== null){
                    this.TodoData[this.editIndex] = this.newTask;
                    this.editIndex = null;
                    useToast().warning("Task Updated!")
                } else {
                    this.TodoData.push(this.newTask);
                    useToast().success("Task Added")
                }
                this.newTask = '';
                this.saveDB();
            }


            const todos = localStorage.getItem('TodoData!')

            if(todos) {
                this.TodoData = JSON.parse(todos);
            }

            console.warn(todos)
        },


        deleteTask(index) {
            this.TodoData.splice(index,1)
            this.saveDB();
            useToast().error("Task Delated!")
        },


        editTask(index) {
            this.newTask = this.TodoData[index],
            this.editIndex = index
            // useToast().warning("Task Updated!")
        }
    }

  };
</script>
  