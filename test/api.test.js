import request from 'supertest';
import { expect } from 'chai'; // Use named import for chai
import app from '../app.js'; // Updated to use ES module import

// Test suite for API endpoints
describe('API Endpoints', () => {
    it('should return 200 for the root endpoint', async () => {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message');
    });

    it('should return 404 for an unknown endpoint', async () => {
        const res = await request(app).get('/unknown');
        expect(res.status).to.equal(404);
    });

    // Add more tests for specific endpoints
});