from flask import Flask, request, render_template, redirect, jsonify
from random import *
import os


# ////////////////////////////////////////////// STORAGE GOSTEIS ///////////////////////////////////////////////






app = Flask(__name__)
app.secret_key = 'SS'



# Rota para a página inicial
@app.route('/', methods=["GET", "POST"])
def index():
    return render_template('index.html')







# Rota para a página inicial
@app.route('/donates', methods=["GET", "POST"])
def index2():
    return render_template('index2.html')






# Rota para o QRCODE
@app.route('/qrcode', methods=["GET", "POST"])
def index3():
    if request.method == "GET":
        return render_template('index3.html')
    else:
        data = list(request.form.to_dict())[0]
        print(data)
        return "nada."
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
def main():
    p = randint(0, 500000)
    port = int(os.environ.get("PORT", p))
    app.run(host="0.0.0.0", port= port)
    

if __name__ == '__main__':
    main()
