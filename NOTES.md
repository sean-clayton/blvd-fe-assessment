# Notes

## What was accomplished

- Accept a possible email as input.
- Display if it is a valid email format.
- Display if it is a disposable email.

## Evaluation Notes

> The application is feature complete and bug free - we value attention to detail and care about the quality of our work.

I tested quite a few cases and resolved errors gracefully.
Tests were written for bugs that I found in my own user testing.

> You added linting and style controls - we care about consistent styles and engineered controls to enforce them.

Linting and styling is enforced through the `npm run lint` command.
You'll find no lint errors and very readable code throughout.

> You added tests - we care about the quality of our code and put controls in place to ensure quality now and in the future.

There are no shortage of tests you'll find.
Tests are colocated next to files -- that's just my personal preference.

> You used external libraries where appropriate - we don’t want to reinvent the wheel and would rather spend our time investing in what truly adds value to our customers. Consider component libraries, network libraries, state libraries, etc.

You'll find the external libraries I used in the `package.json` file -- almost all of them are revolving around tests (in addition to the default MUI dependency).

> You used clean code principles and component composition - we prioritize clean code to enhance readability, maintainability, and scalability.

As mentioned before, the code you see here is organized rather neatly and is very readable.

> You used TypeScript to help achieve clean code - we use Typescript to enhance readability, maintainability, and code safety.

TypeScript was used to great lengths to ensure the compiler would catch bugs as I refactored them.

> You added accessibility controls - our mission is to make self care accessible to ALL. This includes things like supporting screen readers and keyboard form navigation

Tests were written with accessibility in mind (depending on aria roles, ensuring proper labels, etc).
The markup was written in a way that screen reader users can easily use the application.
By utilizing built-in browser primitives, keyboard use is not an issue.

> You commit your work in small, atomic commits - we practice continuous integration and deployment through small, incrementally deliverable units of work 

Commits were made in succinct chunks with proper subjects.

## Final Thoughts

Had I a bit more time I would have implemented i18n (localization is a form of accessibility, in my opinion).
I feel quite pleased with the amount of abstraction I've done and the choices I made.
I didn't do anything that was out of scope and I feel like all of the requirements were met fully.
It's been a while since I've used cypress and was pretty impressed by the component testing it does -- it was really helpful during development!
I would like to have added more error handling, but I'm happy with the final result here.

Thanks for the opportunity!