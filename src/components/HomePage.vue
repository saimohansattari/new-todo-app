<template>
    <div>
        <MainSection>
            <FormContent>
                <Input placeholder="Tasks(Reading Book at 6PM..)"/>
                <i class="fa-solid fa-square-plus"></i>                
            </FormContent>

            <TaskList>
                <TaskPage />
            </TaskList>
        </MainSection>
        
    </div>
</template>
  
<script>

import { MainSection, FormContent, Input, TaskList } from '@/StyledComponents/StyledComponents';
import TaskPage from './TaskPage.vue'
  export default {

    components : {
        MainSection,
        FormContent,
        Input,
        TaskList,
        TaskPage,
    } 
  };
</script>
  