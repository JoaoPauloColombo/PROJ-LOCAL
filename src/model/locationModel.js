const fs = require('fs');
const path = require('path');
const fileName = 'dbLocation.json';
const filePath = path.join(__dirname, "..", "database", fileName);

class LocationModel {
    static async getLocation() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    if (err.code === "ENOENT") {
                        this.writeLocationToFile([])
                        resolve([]);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    }

    static async writeLocationToFile(location) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(location), (err) => {
                if (err) reject(err);
                console.log(`Data written to file: ${filePath}`);
                resolve(location);
            });
        });
    }

    static async getAllLocation() {
        return await this.getLocation();
    }

    static async getLocationByEstadoCidadeEndereco(estado, cidade, endereco) {
        const locations = await this.getLocation();
        return locations.find(loc => loc.estado === estado && loc.cidade === cidade && loc.endereco === endereco);
    }

    static async createLocation(estado, cidade, endereco) {
        const locations = await this.getLocation();
        locations.push({ estado, cidade, endereco });
        await this.writeLocationToFile(locations);
    }
}

module.exports = LocationModel;
