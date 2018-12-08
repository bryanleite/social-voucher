import { TestBed, async, inject } from '@angular/core/testing';

import { RolesGuard } from './roles.guard';

describe('RouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesGuard]
    });
  });

  it('should ...', inject([RolesGuard], (guard: RolesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
