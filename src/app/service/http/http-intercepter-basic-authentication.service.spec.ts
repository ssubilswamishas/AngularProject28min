import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicAuthenticationService } from './http-intercepter-basic-authentication.service';

describe('HttpIntercepterBasicAuthenticationService', () => {
  let service: HttpIntercepterBasicAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBasicAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
