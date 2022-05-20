import { createResponse } from './shared/lib.js';

function calculateAnimalAge(humanAge, yearModifier) {
    let animalAge = 0;
    // start at 15 for first year
    if (humanAge >= 1) {
        animalAge += 15;
    }

    // add 9 years for second year
    if (humanAge >= 2) {
        animalAge += 9;
    }

    // add yearModifer for each year after the second
    if (humanAge >= 3) {
        animalAge += (yearModifier * (humanAge - 2));
    }

    return animalAge;
}

export const handler = async function (event) {
    const humanYears = Number(event?.queryStringParameters?.age);
    if (!humanYears || humanYears < 1) {
        return createResponse(
            400,
            {
                error: 'Invalid age given, must be a number greater than 0',
            },
        );
    }

    const catYears = calculateAnimalAge(humanYears, 4);
    const dogYears = calculateAnimalAge(humanYears, 5);

    return createResponse(
        200,
        {
            humanYears,
            catYears,
            dogYears,
        },
    );
};
