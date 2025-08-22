import { login, signup } from '../../services/auth';

describe('Auth Service', () => {
  it('should login successfully', async () => {
    const response = await login('test@test.com', 'password');
    expect(response.success).toBe(true);
    expect(response.token).toBe('mock-token');
  });

  it('should signup successfully', async () => {
    const response = await signup('Test User', 'test@test.com', 'password');
    expect(response.success).toBe(true);
    expect(response.token).toBe('mock-token');
  });
});
