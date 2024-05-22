//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface itCourse {
    courseName: string;
    tuitionFees: number;
    institue: string;
};

const itCourse = {
    courseName: "Cloud Applied generative AI",
    tuitionFees: 4000,
    institue: "Yashwa IT Initiative"
};

console.log(itCourse);