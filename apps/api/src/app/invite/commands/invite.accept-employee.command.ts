import { IInviteAcceptInput } from '@gauzy/models';
import { ICommand } from '@nestjs/cqrs';

export class InviteAcceptEmployeeCommand implements ICommand {
	static readonly type = '[Invite] Accept Employee';

	constructor(public readonly input: IInviteAcceptInput) {}
}
