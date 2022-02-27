import numpy as np

x = [2, 6, 2, 8, 4, 0, 1, 5, 7]


def calculate(list):
    if len(list) == 9:
        ls = np.array(list).reshape(3, 3)
        calculations = {}

        mean_ls = [ls.mean(axis=0), ls.mean(axis=1), ls.mean()]
        var_ls = [ls.var(axis=0), ls.var(axis=1), ls.var()]
        std_ls = [ls.std(axis=0), ls.std(axis=1), ls.std()]
        max_ls = [ls.max(axis=0), ls.max(axis=1), ls.max()]
        min_ls = [ls.min(axis=0), ls.min(axis=1), ls.min()]
        sum_ls = [ls.sum(axis=0), ls.sum(axis=1), ls.sum()]

        ls_keys = ["mean", "variance", "standard deviation", "max", "min", "sum"]
        ls_values = [mean_ls, var_ls, std_ls, max_ls, min_ls, sum_ls]

        for i in range(len(ls_keys)):
            calculations[ls_keys[i]] = ls_values[i]

        return calculations
    else:
        raise ValueError("List must contain nine numbers.")

print(calculate(x))
