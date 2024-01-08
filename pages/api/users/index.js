import { prisma } from "@/config/db";

    
export default async function handler(req, res){

    switch(req.method){
        case "GET" :
            return await getUser(req, res);
        case "POST" :
            return await addUser(req, res);
    }
}


const getUser = async (req, res) => {

    try {
        const result = await prisma.user.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }

}

const addUser = async (req, res) => {
    try {

        const {foto, nama, nik, ttl, agama, namaIbu, email, noTelfon, alamat, sekolah, nilaiSma, jurusan1} = req.body;
        const data = {
            foto : foto,
            nama: nama,
            nik: nik,
            ttl: ttl,
            agama: agama,
            namaIbu: namaIbu,
            email: email,
            noTelfon: noTelfon,
            alamat: alamat,
            sekolah: sekolah,
            nilaiSma: nilaiSma,
            jurusan1: jurusan1
        };

        const result = await prisma.user.create({
            data: data,
            select : {
                id : true
            }
        });

        return res.status(200).json({result});
    } catch (error) {
        return res.status(500).json(error);
    }
};
// const updateUser = async (req, res) => {

//     try {
//         await User.update(req.body, {
//             where:{
//                 id:req.params.id
//             }
//            });
//             res.status(200).json({msg: "User Updated"});
//     } catch (error) {
//         return res.status(200).json(error);
//     } 
// }

// const deleteUser = async (req, res) => {

//     try {
//         try {
//             await User.destroy({
//              where:{
//                  id:req.params.id
//              }
//             });
//              res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         return res.status(200).json(error);
//     } 
// }
// }
