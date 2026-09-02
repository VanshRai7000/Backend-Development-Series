export function getgrade(marks) {
    if (marks >= 95) return 'A+';
    else if (marks >= 90 && marks < 95) return 'A';
    else if (marks >= 85 && marks < 90) return 'B+';
    else if (marks >= 80 && marks < 85) return 'B';
    else return 'C';
}