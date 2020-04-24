

import { TestBed } from '@angular/core/testing';

import { PlanInterview } from './plan-interview';

describe('PlanInterview', () => {
  let plannedInterview: PlanInterview;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    plannedInterview = TestBed.inject(PlanInterview);
  });

  it('should create an instance', () => {
    plannedInterview.plan({candidateId : 0, interviewDay : new Date('2020-04-22T00:00:00')});
    expect(plannedInterview).toBeTruthy();
  });

  it('should create an instance', () => {
    plannedInterview.plan({candidateId : 0, interviewDay : new Date('2020-04-22T00:00:00')});
    expect(plannedInterview).toBeTruthy();
  });
});
