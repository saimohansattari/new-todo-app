<template>

        <TaskList>
            <TaskCard v-for="(task, index) in tasks" :key="index">
                <TaskText :class="{ completed: task.completed }">{{task.text}}</TaskText>
                 
                 <TaskIcons>

                    <div id="text">
                        <button @click="$emit('toggle-completed', index)">completed</button>
                    </div>

                    <div id="text">
                        <i class="fa-solid fa-pen-to-square" @click="$emit('edit-task', index)"></i>
                        <i class="fa-solid fa-trash" @click="$emit('delete-Task', index)"></i>
                    </div>
                    
                 </TaskIcons>
            </TaskCard>           
        </TaskList>
       
    

</template>

<script>
import {TaskCard, TaskList,TaskText, TaskIcons} from '../StyledComponents/StyledComponents.js'

export default {
    components : {
        TaskCard,
        TaskList,
        TaskIcons,
        TaskText
    },

    props : {
        tasks : {
            type: Array,
            required : true
        }
    },

    


}

</script>
