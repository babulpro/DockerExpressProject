import request from 'supertest';
import app from '../app/app.js';

describe('GET /api/user/profile', () => {
  it('should return user profiles', async () => {
    const res = await request(app)
      .get('/api/user/profile')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);
    
    expect(res.text).toContain('Hello World');
  });
});