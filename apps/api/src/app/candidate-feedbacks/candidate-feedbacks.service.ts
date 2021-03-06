import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../core/crud/crud.service';
import { CandidateFeedback } from './candidate-feedbacks.entity';

@Injectable()
export class CandidateFeedbacksService extends CrudService<CandidateFeedback> {
	constructor(
		@InjectRepository(CandidateFeedback)
		private readonly candidateFeedbackRepository: Repository<
			CandidateFeedback
		>
	) {
		super(candidateFeedbackRepository);
	}
}
