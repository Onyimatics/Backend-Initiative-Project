import fs from 'fs';

class Utilities {
    static generateNewId(array) {
        if(array.length > 0) {
            return array[array.length - 1].id + 1
        } else  {
            return 1;
        }
    }

    static newDate() {
        return new Date().toString();
    }

    static mustExist(array, id) {
        return new Promise((resolve, reject) => {
            const row = array.find(r => r.id == id);

            if(!row) {
                reject({
                    status: 404,
                    message: 'Id not found'
                })
            }
            resolve(row)
        })
    };

    static writeJSONFile(filename, content) {
        fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
            if(err) {
                console.log(err);
            }
        })
    }
};

export default Utilities;