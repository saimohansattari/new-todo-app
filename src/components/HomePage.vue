<template>
    
        <MainSection>
            <FormContent >
                <Input v-model="newTask"  placeholder="Tasks(Reading Book at 6PM..)"/>
                <i @click="AddTodo(newTask)" class="fa-solid fa-square-plus"></i>                
            </FormContent>

            <FormContent>
                <TaskPage />
            </FormContent>
        </MainSection>
        
    
</template>
  
<script>

import { MainSection, FormContent, Input,  } from '@/StyledComponents/StyledComponents';
import TaskPage from './TaskPage.vue'
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
            TodoData : []
        }
    },

    methods : {
        saveDB(){
            localStorage.setItem('TodoData', JSON.stringify(this.TodoData))
        },

        AddTodo() {
            if(this.newTask.trim()){
                this.TodoData.push(this.newTask);
                this.newTask = '';
                this.saveDB();
            }
        } 
    }

  };
</script>
  