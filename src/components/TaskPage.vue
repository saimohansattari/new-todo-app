<template>

        <TaskList>
            <TaskCard v-for="(task, index) in tasks" :key="index">
                 {{task}}
                 <TaskIcons>
                    <i class="fa-solid fa-pen-to-square" @click="$emit('edit-task', index)"></i>
                    <i class="fa-solid fa-trash" @click="$emit('delete-Task', index)"></i>
                 </TaskIcons>
            </TaskCard>           
        </TaskList>
       
    

</template>

<script>
import {TaskCard, TaskList, TaskIcons} from '../StyledComponents/StyledComponents.js'

export default {
    components : {
        TaskCard,
        TaskList,
        TaskIcons
    },

    props : {
        tasks : {
            type: Array,
            required : true
        }
    }


}

</script>