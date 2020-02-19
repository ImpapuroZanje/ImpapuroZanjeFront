import { Applicant } from './applicant';
import { State } from './state';
import { Document } from './document';

export class Demand {
    applicant: Applicant
    document: Document
    state: State
    residenceCountry: string
}