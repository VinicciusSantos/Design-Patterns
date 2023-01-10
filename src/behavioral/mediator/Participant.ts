export default class Participant {
    messages: string[] = []

    constructor(readonly name: string) {}
    
    receive(participant: Participant, message: string) {
        this.messages.push(`Participante ${this.name} recebeu a mensagem ${message} do participante ${participant.name}`)
    }
}