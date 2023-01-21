from flask import Flask, render_template, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

def db_config():
    config = {
  'user': 'root',
  'password': 'YOUR DB PASSWORD',
  'host': '127.0.0.1',
  'database': 'YOUR DB NAME',
  "port":3306
    }

    cnx = mysql.connector.connect(**config)
    cur=cnx.cursor(buffered=True)
    
    # print(responseData)
    return cnx,cur


# @app.route('/users',methods = ['GET','POST'])  
# def get_user_data():
#     cnx,cur = db_config()
#     try:
#         if request.method == 'GET':
#             query = "select * from user_dtls"
#             cur.execute(query)
#             responseData = [dict((cur.description[i][0], value)
#                                     for i, value in enumerate(row)) for row in cur.fetchall()]
#             # print(responseData)
#             cur.close()
#             cnx.close()
        
#         if request.method == 'POST':
#             body = request.json
#             id = body['id']
#             first_name = body['first_name']
#             last_name = body['last_name']
#             email = body['email']
#             print(body)

#             insert_query = "insert into user_dtls(id,first_name,last_name,email) values(%s,%s,%s,%s)"
#             val = (id,first_name,last_name,email)
            
#             cur.execute(insert_query,val)
#             cnx.commit()
#             cur.close()
#             cnx.close()
#             return jsonify({
#                 'status': 'Data is posted to MY Sql DB!',
#                 "id" : id,
#                 "first_name":first_name,
#                 "last_name":last_name,
#                 "email":email


#             })

#     except Exception as e:
#         d = {}
#         return jsonify(d)
   
#     return jsonify(responseData)    

@app.route('/createUser',methods = ['POST'])  
def create_user():
    cnx,cur = db_config()
    try:
    
        body = request.json
        id = body['id']
        first_name = body['first_name']
        last_name = body['last_name']
        email = body['email']


        insert_query = "insert into user_dtls(id,first_name,last_name,email) values(%s,%s,%s,%s)"
        val = (id,first_name,last_name,email)
        
        cur.execute(insert_query,val)
        cnx.commit()
        cur.close()
        cnx.close()
        return jsonify({
            'status': 'Data is posted to MY Sql DB!',
            "id" : id,
            "first_name":first_name,
            "last_name":last_name,
            "email":email


        })

        
    except Exception as e:
        d = {}
        return jsonify(d)
   

@app.route('/updateUser',methods = ['PUT'])
def update_user():
    cnx,cur = db_config()
    try:
        
        if request.method == 'PUT':
            body = request.json
            id  = body['id']
            first_name = body['first_name']
            last_name = body['last_name']
            email = body['email']

            update_query =  "update user_dtls set first_name =%s ,last_name = %s,email=%s where id = %s"
            val = (first_name,last_name,email,id)
            cur.execute(update_query,val)
            cnx.commit()
            cur.close()
            cnx.close()
            return jsonify({
                'status': 'Data is updated to MY Sql DB!',
                'firstName': first_name,
                'lastName': last_name,
                'emailId':email
            })
        
    except Exception as e:
        d = {}
        return jsonify(d)
   

@app.route('/deleteUser',methods = ['DELETE'])
def delete_user():
    cnx,cur = db_config()
    try:
        
        if request.method == 'DELETE':
            body = request.json
            # id = request.args.get('id')

            id  = body['id']
            delete_query = "delete from user_dtls where id = %s"
            val = (id,)
            cur.execute(delete_query,val)
            cnx.commit()
            cur.close()
            cnx.close()
            return jsonify({
                'status': 'Data is deleted from MY Sql DB!',
                "id":id
            })
        
    except Exception as e:
        d = {}
        return jsonify(d)



@app.route('/users',methods = ['GET','POST'])  
def get_user_data():
    cnx,cur = db_config()
    try:
        if request.method == 'GET':
            query = "select * from user_dtls"
            cur.execute(query)
            responseData = [dict((cur.description[i][0], value)
                                    for i, value in enumerate(row)) for row in cur.fetchall()]
            # print(responseData)
            cur.close()
            cnx.close()
        
        if request.method == 'POST':
            body = request.json
            id = body['id']
            first_name = body['first_name']
            last_name = body['last_name']
            email = body['email']
            print(body)

            insert_query = "insert into user_dtls(id,first_name,last_name,email) values(%s,%s,%s,%s)"
            val = (id,first_name,last_name,email)
            
            cur.execute(insert_query,val)
            cnx.commit()
            cur.close()
            cnx.close()
            return jsonify({
                'status': 'Data is posted to MY Sql DB!',
                "id" : id,
                "first_name":first_name,
                "last_name":last_name,
                "email":email


            })

    except Exception as e:
        d = {}
        return jsonify(d)
   
    return jsonify(responseData)    



@app.route('/users/<string:id>', methods=['GET', 'DELETE', 'PUT'])
def onedata(id):
    cnx,cur = db_config()
    # GET a specific data by id
    try:
        if request.method == 'GET':
            query = "select * from user_dtls where id=%s"
            cur.execute(query,(id,))
            responseData = dict((cur.description[i][0], v) for i,v in enumerate(cur.fetchone()))
            print(responseData)
            cur.close()
            cnx.close()
            return jsonify(responseData)
        
        # delete data by id
        if request.method == 'DELETE':
            delete_query = "delete from user_dtls where id = %s"
            cur.execute(delete_query,(id,))
            cnx.commit()
            cur.close()
            cnx.close()
            return jsonify({'status': 'Data id: ' + id + ' is deleted!'})
 
    # UPDATE a data by id
        if request.method == 'PUT':
            body = request.json
            # id  = body['id']
            first_name = body['first_name']
            last_name = body['last_name']
            email = body['email']

            update_query =  "update user_dtls set first_name =%s ,last_name = %s,email=%s where id = %s"
            val = (first_name,last_name,email,id)
            cur.execute(update_query,val)
            cnx.commit()
            cur.close()
            cnx.close()
 
 
            return jsonify({'status': 'Data id: ' + id + ' is updated!'})

    except:
        return jsonify({"status":"not found"})


@app.route('/get_unique_id')
def get_users_id():
    cnx,cur = db_config()
    try:
        if request.method == 'GET':
            
            records = cur.execute("select id from user_dtls")
            print(records)
            dict_id = {'id':[value[0] for value in cur.fetchall()]}
        
            # print(dict_id)
            cur.close()
            cnx.close()
            return dict_id['id'][0:4]
           

    except:
        return({})

# /////////////////////////////////

@app.route('/get_unique_id2')
def get_users_id2():
    cnx,cur = db_config()
    try:
        if request.method == 'GET':
            
            records = cur.execute("select id from user_dtls")
            print(records)
            dict_id = {'id':[value[0] for value in cur.fetchall()]}
        
            # print(dict_id)
            cur.close()
            cnx.close()
            return dict_id['id'][0:5]
           

    except:
        return({})


if __name__ == '__main__':
    app.debug = True
    app.run()