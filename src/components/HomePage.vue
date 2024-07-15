<template>
    <div>
        <MainSection>
            <FormContent>
                <Input placeholder="Tasks(Reading Book at 6PM..)"/>
                <i class="fa-solid fa-square-plus"></i>                
            </FormContent>

            <FormContent>
                <TaskPage />
            </FormContent>
        </MainSection>
        
    </div>
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
    } 
  };
</script>
  