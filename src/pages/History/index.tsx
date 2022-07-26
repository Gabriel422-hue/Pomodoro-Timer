import { HistoryContainer, HistoryList, Status } from "./styles";

export function History(){
    return(
        <HistoryContainer>
            <h1>Meu histórico</h1>


            <HistoryList>
               <table>
                <thead>
                    <tr>
                        <th>Tafera</th>
                        <th>Duração</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 Minutos</td>
                        <td>Ha dois meses</td>
                        <td>
                            <Status statusColor="green"> Concluido </Status>
                            
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 Minutos</td>
                        <td>Ha dois meses</td>
                        <td>
                            <Status statusColor="yellow" > Em Andamento </Status>
                            
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 Minutos</td>
                        <td>Ha dois meses</td>
                        <td>
                            <Status statusColor="red"> Interrompido </Status>
                            
                        </td>
                    </tr>
                </tbody>
                </table> 
            </HistoryList>
        </HistoryContainer>
    )
}