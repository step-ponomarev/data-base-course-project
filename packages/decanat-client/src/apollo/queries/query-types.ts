enum PersonType {
    STUDENT,
    TEACHER,
}

export type PersonQueryType = {
    person: {
        firstName: string;
        lastName: string;
        patherName: string;
        group_id: number;
        type: PersonType;
    }
}