export class QuestionData {
	private questionId: number;
	private description: string;
	private choiceA: string;
	private choiceB: string;

	constructor(private questionIdData: number, private descriptionData: string, private choiceAData: string, private choiceBData: string){
		this.questionId = questionIdData;
		this.description = descriptionData;
		this.choiceA = choiceAData;
		this.choiceB = choiceBData;
	}

	getQuestionId(): number {
		return this.questionId;
	}

	getDescription(): string {
		return this.description;
	}

	getChoiceA(): string {
		return this.choiceA;
	}

	getChoiceB(): string {
		return this.choiceB;
	}
}