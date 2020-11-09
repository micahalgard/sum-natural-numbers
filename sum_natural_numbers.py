def sum_natural_numbers(myInt, myMultiple=""):

    def is_multiple(i, myMultiple):
        return ((i % myMultiple) == 0)

    def process_array(i, myMultiple):
        myValue = 0
        for n in myMultiple:
            if is_multiple(i, n):
                myValue = i
                break
        return myValue

    i = 0
    myReturn = 0
    myType = type(myMultiple)

    for i in range(myInt + 1):
        if myType is type(""):
            myReturn += i
        if myType is type(1):
            if(is_multiple(i, myMultiple)):
                myReturn += i
        if myType is type([]):
            myReturn += process_array(i, myMultiple)

    return myReturn

if __name__ == '__main__':

    # some tests
    print('test 1: ',  sum_natural_numbers(10))
    print('test 2: ', sum_natural_numbers(12, 3))
    print('test 3: ', sum_natural_numbers(100, [3, 5, 11]))