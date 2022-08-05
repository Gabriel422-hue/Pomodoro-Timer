import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import {useForm} from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useState } from "react";


const newCyclesFromValidateSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos.')
    .max(60,'O ciclo precisa ser de no maximo 60 minutos.'),
})


type NewCycleFormData = zod.infer<typeof newCyclesFromValidateSchema>


export function Home() {

    interface Cycle {
        id: string
        task: string
        minutesAmount: number
    }

    const [cycles, setCycles] = useState<Cycle[]>([])

    const [activeCycleId, setActiveCycleId ] = useState<String | null>(null)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const {register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
        resolver: zodResolver(newCyclesFromValidateSchema),
        defaultValues: {
            task:" ",
            minutesAmount: 0,
    }

})

    function handleCreateNewCylcle(data: NewCycleFormData) {
        
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
          id,
          task: data.task,
          minutesAmount:data.minutesAmount,
        }

        setCycles((state) => {return [...state, newCycle];})
        setActiveCycleId(id)
   
        reset();
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 60)

    const secondsAmount = currentSeconds % 60

    const minutes = String (minutesAmount).padStart(2, '0')

    const seconds = String (secondsAmount).padStart(2, '0')

    console.log(activeCycle)
    
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCylcle)} action="" >
               <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>

                     <TaskInput 
                        id="task" 
                        list="task-suggestions"
                        placeholder="Dê um nome para o seu projeto"
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register("minutesAmount",  {valueAsNumber:true })}
                    />

                    <span>minutos.</span>
               </FormContainer>

            <CountdownContainer>
                <span>{minutes[0]}</span>
                <span>{minutes[1]}</span>
                <Separator>:</Separator>
                <span>{seconds[0]}</span>
                <span>{seconds[1]}</span>
            </CountdownContainer>

            <StartCountdownButton
                type="submit">
                <Play size={24} />
                Comecar
            </StartCountdownButton>
            
            </form>
        </HomeContainer>
    
    )
}