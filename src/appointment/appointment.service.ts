import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Between, Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepo: Repository<Appointment>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    console.log(createAppointmentDto);
    const [user] = await this.userRepo.findBy({
      id: createAppointmentDto.userId,
    });
    const appointment = new Appointment();
    appointment.apptNumber = createAppointmentDto.apptNumber;
    appointment.date = createAppointmentDto.date;
    appointment.evaluation = createAppointmentDto.evaluation;
    appointment.user = user;
    appointment.total = createAppointmentDto.total;
    appointment.paid = createAppointmentDto.paid;
    appointment.hour = createAppointmentDto.hour;
    console.log(user);
    return await this.appointmentRepo.save(appointment);
  }

  async findAll() {
    return await this.appointmentRepo.find();
  }

  async findOne(id: string) {
    return this.appointmentRepo.findBy({ id });
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    return await this.appointmentRepo.update(id, updateAppointmentDto);
  }

  async remove(id: string) {
    return await this.appointmentRepo.delete(id);
  }

  async getAppointmentsForWeek(date: Date) {
    const initialDate = new Date(date);
    initialDate.setDate(initialDate.getDate() - 1);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 8);
    const appointments = await this.appointmentRepo
      .createQueryBuilder('appointment')
      .leftJoinAndSelect('appointment.user', 'user')
      .where('appointment.date BETWEEN :startDate AND :endDate', {
        startDate: initialDate,
        endDate: endDate,
      })
      .getMany();
    return appointments;
  }
}
