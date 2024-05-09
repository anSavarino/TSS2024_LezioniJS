# print("Hello world")
# nome = input("Come ti chaimi? ")

# print(f"Ciao {nome}!")

# eta = input("Quanti anni hai? ")

# if int(eta) > 18 and nome == "Angelo":
#     print("Puoi accedere")
# elif int(eta) < 18 or nome == "Angelo":
#     print("Non hai l'età per accedere")
# else:
#     print("Non puoi accedere")
    
    
import random


colori = ["rosso", "verde", "blu", "giallo", "nero", "bianco"]

print(colori[0])

for c in colori:
    if c == "verde":
        continue # o break
    print(c)
    
    for x in range(2, 22, 4):
        print(x)
        
print("Import di random")
numRand = random.randint(1, 90)
print(numRand)

# voglio 6 numeri a caso tra 1 e 90

numeriACaso = random.sample(range(1, 91), 6)
print(numeriACaso)

coloreRandom = random.choice(colori)

print(coloreRandom)

i = 0
while i < 10:
    print(i)
    if(i == 4):
        break
    i+=1