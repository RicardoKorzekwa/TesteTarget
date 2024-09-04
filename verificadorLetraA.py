def verificar_letra_a(string):
    quantidade_a = string.lower().count('a')
    
    if quantidade_a > 0:
        print(f"A letra 'a' aparece {quantidade_a} vezes na string fornecida.")
    else:
        print("A letra 'a' não aparece na string fornecida.")

def main():
    escolha = input("Você quer verificar uma string predefinida (1) ou digitar uma nova string (2)? Digite 1 ou 2: ")

    if escolha == '1':
        string_predefinida = "Exemplo de string para verificar a presença da letra a."
        print(f"Verificando a string predefinida: '{string_predefinida}'")
        verificar_letra_a(string_predefinida)
    elif escolha == '2':
        string_usuario = input("Digite a string que você quer verificar: ")
        verificar_letra_a(string_usuario)
    else:
        print("Opção inválida! Por favor, escolha 1 ou 2.")

if __name__ == "__main__":
    main()
