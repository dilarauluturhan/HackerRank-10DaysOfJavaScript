function getGrade(score) {
    if(score>25 && score<=30) 
        return 'A';
    else if(score>20)
        return 'B';
    else if(score>15)
        return 'C';
    else if(score>10)
        return 'D';
    else if(score>5)
        return 'E';
    else if(score>0)
        return 'F';
};