import pyautogui
import pyperclip
import time
import pandas as pd

def abrir_chrome():
    pyautogui.press('win')
    pyautogui.write('chrome')
    pyautogui.press('enter')


def entrar_driver():
    pyautogui.write("https://drive.google.com/drive/folders/149xknr9JvrlEnhNWO49zPcw0PW5icxga")
    pyautogui.press('enter')


def baixar_arquivo():
    pyautogui.click(x=292, y=267, clicks=2)
    time.sleep(3)
    pyautogui.click(x=331, y=450, button='right')
    time.sleep(3)
    pyautogui.click(x=457, y=676)
    time.sleep(3)


def abrir_email():
#   Abrir o app do email
    pyautogui.hotkey('win')
    pyautogui.write('email')
    pyautogui.press('enter')


def enviar_email():
#   Base de dados
    tabela = pd.read_excel(r'C:\Users\jose_\OneDrive\Documentos\Estudos\arquivos_pyton\Vendas - Dez.xlsx')
    faturamento = tabela['Valor Final'].sum()
    quantidade = tabela['Quantidade'].sum()
    time.sleep(5)

#   Abri a janela de escrever o email
    pyautogui.click(x=81, y=106)
    time.sleep(5)
#   Escreve o destinatário
    pyautogui.write('joselucasa937@gmail.com')
    pyautogui.press('enter')
    time.sleep(2)

    pyautogui.press('tab')
    pyautogui.press('tab')
    pyautogui.press('tab')
    time.sleep(2)

#   Escreve o assunto
    pyautogui.write("Relatorio de vendas")
    time.sleep(2)
    pyautogui.press('tab')
    time.sleep(2)

#   Escrever o corpo do email
    texto = f'''
Prezados, bom dia

O faturamento de ontem foi de: R$ {faturamento}
A quantidade de produtos foi de: R$ {quantidade}

Abs
JoseLucas
'''
    pyperclip.copy(texto)
    pyautogui.hotkey('ctrl', 'v')
    time.sleep(2)

#   Enviando o email
    pyautogui.hotkey('ctrl', 'enter')
    time.sleep(2)


pyautogui.POUSE = 2
abrir_chrome()
time.sleep(5)
entrar_driver()
time.sleep(5)
baixar_arquivo()
time.sleep(5)
abrir_email()
time.sleep(5)
enviar_email()
time.sleep(5)