<template>

        <TaskList>
            <TaskCard>
                 Lorem adipisicing elit. Voluptate, iste?
                 <TaskIcons>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                 </TaskIcons>
            </TaskCard>           
            <TaskCard>
                 Gym at 7:30pm to 8:30pm
                 <TaskIcons>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
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


}

</script>