import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { ArrayContainedBy } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { response } from 'express';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const expectedResponse = [
      {
        id: expect.any(String),
        createdAt: expect.any(Date),
        updateddAt: expect.any(Date),
        first_name: expect.any(String),
        last_name: expect.any(String),
        email: expect.any(String),
        cellphone: expect.any(String),
        rol: expect.any(String),
        image: expect.any(String) || '',
      },
    ];
    const bearerToken =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFjYWQyMDQtNjg1Ny00NTY4LWJhNzUtMmM1MTY0YzkzN2U0IiwiZmlyc3RfbmFtZSI6Imp1YW4gY2FybG9zIiwiY2VsbHBob25lIjoiNzMwODAzNzIiLCJyb2wiOiJBRE1JTiJ9LCJpYXQiOjE2OTAyMzk3MDMsImV4cCI6MTY5MTQ2MTcwM30.nwo_WC2VKZ8KWkl-Ha3zsxuE14CujtbjNg7ZyD8rtlM';
    return request(app.getHttpServer())
      .get('/user')
      .set('Authorization', bearerToken)
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });
  it('create user', async () => {
    const newUser = {
      first_name: 'juan carlos',
      last_name: 'mamani rojas',
      password: '123456',
      email: 'juantest@juantested.com',
      cellphone: '730803722185',
      rol: 'ADMIN',
      dddd: 'ddddd',
    };

    return await request(app.getHttpServer())
      .post('/user')
      .send(newUser)
      .expect(201)
      .then((res) => {
        console.log(res.body);
      });
  });
});
