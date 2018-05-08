class Salario {
   /**
    *  
    * @param {number} pSalarioBruto 
    * 
    * 
    */
    constructor(pSalarioBruto) {

        const _salarioBruto = undefined;
    
        this._validarSalario(pSalarioBruto)
        this._efetuarCalculos();
        this._congelar();
      
    }
    
     _congelar() {
        Object.freeze(this);
      }
    

     _validarSalario(pSalarioBruto){

            if(pSalarioBruto === undefined ) {
                throw new Error('Informe o salário bruto a ser calculado !')
            }

            if(typeof pSalarioBruto !== 'number'){
                throw new Error ('O salário deve estar no formato numérico !')
            } 

            if (pSalarioBruto < 0){
                throw new Error('O valor do salário bruto deve ser maior do que 0 !');
            }

       
          this._salarioBruto = pSalarioBruto;
        
         
    }
  //Fim da validação

    _efetuarCalculos(){

        if(this._salarioBruto <= 1693.72 ){
            this._descontoINSS = (this._salarioBruto * (8/100))
        } else 
        if((this._salarioBruto > 1693.72 ) && (this._salarioBruto <= 2822.90)){
           this._descontoINSS = (this._salarioBruto * (9/100))
        }else 
        if((this._salarioBruto > 2822.90) && (this._salarioBruto <= 5645.80)){
            this._descontoINSS = (this._salarioBruto * (11/100))
        } else{
            this._descontoINSS2 = (this._salarioBruto * (11/100)) //Exibir Valor?
             this._descontoINSS = 621.04
        }
            /*****Fim descontos INSS*****/

        //Base para calculo do Imposto de renda 
        this._baseDescontoIRPF = this._salarioBruto - this._descontoINSS;
         
         /* Inicio do calculo de IRPF */ 

        if( this._baseDescontoIRPF <= 1903.98){
            this._DescontoIRPF  = 0 //Verficar na tabela
            this._deducaoIRPF = 0;
        } else

        if( (this._baseDescontoIRPF > 1903.99) && ( this._baseDescontoIRPF <= 2826.65)){
            this._DescontoIRPF = this._baseDescontoIRPF * (7.5/100)
            this._deducaoIRPF = this._DescontoIRPF - 142.80
        } else
        
        if( (this._baseDescontoIRPF > 2826.65) && ( this._baseDescontoIRPF <= 3751.05)){
            this._DescontoIRPF =  this._baseDescontoIRPF * (15.00/100)
            this._deducaoIRPF = this._DescontoIRPF - 354.80;
        } else
        
        if( (this._baseDescontoIRPF > 3751.05) && ( this._baseDescontoIRPF <= 4664.68)){
            this._DescontoIRPF =  this._baseDescontoIRPF * (22.5/100);
            this._deducaoIRPF = this._DescontoIRPF - 636.13;
        }

         else {
            this._DescontoIRPF =  this._baseDescontoIRPF * (27.5/100);
            this._deducaoIRPF = this._DescontoIRPF - 869.36;

        } // Fim do calculo IRPF
      
        //Calculando salário liquido
       this._deducaoIRPF = this._deducaoIRPF.toFixed(2)
       this._descontoINSS = this._descontoINSS.toFixed(2)
       this._salarioLiquido = this._salarioBruto - this._descontoINSS 
       this._salarioLiquido = this._salarioLiquido- this._deducaoIRPF

        //Calculando total de descontos
       this._totaldescontos = Number(this._descontoINSS) + Number(this._deducaoIRPF)
        
    /*    console.log("Salario Bruto" + " " +this._salarioBruto.toFixed(2))
        console.log("Base INSS" + " " + this._salarioBruto.toFixed(2))
        console.log("Desconto INSS" + " " +this._descontoINSS)
        console.log("Base do IRPF" + " " +this._baseDescontoIRPF.toFixed(2))
        console.log("Desconto IRPF" +" " + this._DescontoIRPF.toFixed(2))
        console.log("Dedução IRPF:"+ " " +this._deducaoIRPF)
        console.log("Salário líquido:" + " " +this._salarioLiquido.toFixed(2))
       
       */

    } /**Fim do metodo de calculos**/

    
    /**
    - Salário bruto (getter salarioBruto)
    - Desconto do INSS (getter descontoINSS) 
    - Desconto do IRPF (getter descontoIRPF)
    - Total de descontos (getter totalDescontos)
    - Salário líquido (getter salarioLiquido)
     */

    get salarioBruto(){
        return  Number(this._salarioBruto.toFixed(2))
    }
    get descontoINSS(){
        return  Number(this._descontoINSS)
    }
    get descontoIRPF(){
        return  Number(this._deducaoIRPF)
    }
    get salarioLiquido(){
        return  Number(this._salarioLiquido.toFixed(2))   
    }
    get totalDescontos(){
        return Number(this._totaldescontos.toFixed(2))
        
    }
   
  }












































 // By Danilo Silva