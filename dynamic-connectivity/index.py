# https://www.codewars.com/kata/dynamic-connectivity/python

class DynamicConnectivity(object):
    def __init__(self, n):
        self.__map = list(range(0, n))
    
    def __root(self, p):
        while p != self.__map[p]:
            self.__map[p] = self.__map[self.__map[p]]
            p = self.__map[p]
        return p
    
    def union(self, p, q):
        self.__map[self.__root(p)] = self.__root(q)
        
    def connected(self, p, q):
        return self.__root(p) == self.__root(q)
