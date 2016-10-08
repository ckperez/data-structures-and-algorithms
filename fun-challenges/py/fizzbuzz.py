def fzbz():
    for i in list(range(1,101)):
        if not i % 15:
            print('fizzbuzz')
        elif not i % 5:
            print('buzz')
        elif not i % 3:
            print('fizz')
        else:
            print(i)


fzbz()
