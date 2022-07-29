import { HistoryContainer, HistoryList } from "./styles";

export function History(){
    return(
        <HistoryContainer>
            <h1>Meu histórico</h1>


            <HistoryList>
               <table>
                <thead>
                    <tr>
                        <th>Tafera</th>
                        <th>Duracao</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 Minutos</td>
                        <td>Ha dois meses</td>
                        <td>Concluido</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 Minutos</td>
                        <td>Ha dois meses</td>
                        <td>Concluido</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 Minutos</td>
                        <td>Ha dois meses</td>
                        <td>Concluido</td>
                    </tr>
                </tbody>
                </table> 
            </HistoryList>
        </HistoryContainer>
    )
}