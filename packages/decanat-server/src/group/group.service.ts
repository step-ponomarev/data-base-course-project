import { GroupCreateDto } from './dto/group.create';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './models/group.model';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async findById(id: number): Promise<Group> {
    return this.groupRepository.findOne({ id: id });
  }

  async saveGroup(groupCreateDto: GroupCreateDto): Promise<Group> {
    const group: Group = this.createGroup(groupCreateDto);

    return this.groupRepository.save(group);
  }

  private createGroup(createGroupDto: GroupCreateDto): Group {
    return this.groupRepository.create({ name: createGroupDto.name });
  }
}
