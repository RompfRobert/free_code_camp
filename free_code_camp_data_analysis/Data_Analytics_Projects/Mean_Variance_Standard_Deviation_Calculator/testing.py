a = {"a": 1,
     "b": 2,
     "c": 3}

kp = ["x","y","z"]
vp = [7,8,9]

b = {}

for k, v in a.items():
     v = 5
     print(f"{k},{v}")

for i in range(len(kp)):
     b[kp[i]] = vp[i]

print(b)
