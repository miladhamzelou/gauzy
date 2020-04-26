import { TimeSlot } from '@gauzy/models';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TimeSlotCreateCommand } from '..';
import { TimeSlotService } from '../../time-slot.service';
import * as moment from 'moment';
import { BadRequestException } from '@nestjs/common';

@CommandHandler(TimeSlotCreateCommand)
export class TimeSlotCreateHandler
	implements ICommandHandler<TimeSlotCreateCommand> {
	constructor(private _timeSlotService: TimeSlotService) {}

	public async execute(command: TimeSlotCreateCommand): Promise<TimeSlot> {
		try {
			const { input } = command;
			const {
				employeeId,
				duration,
				startedAt,
				keyboard,
				mouse,
				overall
			} = input;
			// time_slot
			return await this._timeSlotService.create({
				employeeId,
				duration,
				keyboard,
				mouse,
				overall,
				startedAt,
				stoppedAt: moment(startedAt)
					.add(duration, 'seconds')
					.toDate()
			});
		} catch (error) {
			throw new BadRequestException('Cant create time slot');
		}
	}
}
