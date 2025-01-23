import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor'; // Utilisez AuthInterceptor

describe('AuthInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthInterceptor], // Utilisez AuthInterceptor
    })
  );

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
