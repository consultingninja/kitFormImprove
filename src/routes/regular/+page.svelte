<script>
    export let form;

</script>
    

    <div class="sign-in-wrapper">
        <h1>Regular</h1>
        <div class="sign-in-content">
    

    
    <form  method="post" action="?/register">
        <div class="form-item">
            <label for="firstname" >Firstname<sup><small>*</small></sup></label>
            <input value={form?.firstname?? ''} id="firstname" type="text" name="firstname" required />
        </div>
    
        <div class="form-item">
          <label for="lastname" >Lastname<sup><small>*</small></sup></label>
          <input value={form?.lastname?? ''} id="lastname" type="text" name="lastname" required />
        </div>
    
        <div class="form-item">
          <label for="email" >Email<sup><small>*</small></sup></label>
          <input class:fieldError={form?.emailError} value={form?.email?? ''} id="email" type="email" name="email" required />
        </div>
    
        <div class="form-item">

        {#if form?.error}
        <small>{form?.message}</small>
        {/if}
        </div>
    
        <div class="form-item">
            <button type="submit" class="btn btn-primary">Sign Up</button>
        </div>
    
    </form>
    </div>
    </div>
    
    <style>
        h1{
            margin:0;
            padding:0;
            color: #000000;
        }
        div{
            color: #FFF;
            margin-bottom: .5em;
            text-shadow: 0 0 2px #000000;
        }
        label{
            padding-right: .5em;
        }
        small{
            padding-left: .5em;
            color: #ff0000;
        }
        button{
            width: 100%;
            background-color: #FFF;
            transition: all 0.3s ease-in;
        }
        button:hover{
            cursor: pointer;
            text-decoration: underline;
            color: #FFF;
            background-color: #4d4c4c;
            transition: all 0.3s ease-in;
        }
        input{
            min-width: 175px;
        }
        .sign-in-wrapper{
            margin-top:2.5em;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100vh;
            width:100%;
            
        }
        .sign-in-content{
            margin-top: 2em;
            max-width: 400px;
            background-color: rgba(0, 0, 0, 0.4);
            padding:1em;
            border-radius: 5px;
        }
        .form-item{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .fieldError{
            outline: 2px solid #ff0000;
        }
        .sign-in-wrapper{
            height: 100vh;
        }


    </style>