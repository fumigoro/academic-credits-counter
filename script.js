
const app = new Vue({
    el: '#app',
    data: {
        main: [
            { take: true, id: 1, subjectCategory: "基礎科目", compulsory: true, name: "工学基礎実験", credits: 1, grade: "1年前期", priority: null },
            { take: true, id: 2, subjectCategory: "基礎科目", compulsory: true, name: "微分積分I", credits: 2, grade: "1年前期", priority: null },
            { take: true, id: 3, subjectCategory: "基礎科目", compulsory: true, name: "線形代数I", credits: 2, grade: "1年前期", priority: null },
            { take: true, id: 4, subjectCategory: "基礎科目", compulsory: true, name: "力学", credits: 2, grade: "1年前期", priority: null },
            { take: false, id: 5, subjectCategory: "基礎科目", compulsory: false, name: "地学", credits: 2, grade: "1年前期", priority: null },
            { take: false, id: 22, subjectCategory: "学科共通科目", compulsory: false, name: "物理数学基礎", credits: 2, grade: "1年前期", priority: "応用物理" },
            { take: true, id: 6, subjectCategory: "基礎科目", compulsory: true, name: "微分積分Ⅱ", credits: 2, grade: "1年後期", priority: null },
            { take: true, id: 7, subjectCategory: "基礎科目", compulsory: true, name: "線形代数Ⅱ", credits: 2, grade: "1年後期", priority: null },
            { take: true, id: 8, subjectCategory: "基礎科目", compulsory: true, name: "確率統計", credits: 2, grade: "1年後期", priority: null },
            { take: true, id: 9, subjectCategory: "基礎科目", compulsory: true, name: "電磁気学基礎", credits: 2, grade: "1年後期", priority: null },
            { take: true, id: 10, subjectCategory: "基礎科目", compulsory: true, name: "情報処理入門", credits: 2, grade: "1年後期", priority: null },
            { take: true, id: 11, subjectCategory: "基礎科目", compulsory: true, name: "プログラミング基礎", credits: 2, grade: "1年後期", priority: null },
            { take: false, id: 23, subjectCategory: "学科共通科目", compulsory: false, name: "情報数学", credits: 2, grade: "1年後期", priority: "情報" },
            { take: true, id: 12, subjectCategory: "基礎科目", compulsory: true, name: "技術表現法", credits: 2, grade: "2年前期", priority: null },
            { take: true, id: 13, subjectCategory: "基礎科目", compulsory: true, name: "微分方程式", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 14, subjectCategory: "基礎科目", compulsory: false, name: "振動波動", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 15, subjectCategory: "基礎科目", compulsory: false, name: "化学基礎", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 24, subjectCategory: "学科共通科目", compulsory: false, name: "応用数学I", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 25, subjectCategory: "学科共通科目", compulsory: false, name: "量子力学概論", credits: 2, grade: "2年前期", priority: "応用物理" },
            { take: false, id: 26, subjectCategory: "学科共通科目", compulsory: false, name: "電気回路学基礎", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 27, subjectCategory: "学科共通科目", compulsory: false, name: "プログラミング応用", credits: 2, grade: "2年前期", priority: null },
            { take: true, id: 39, subjectCategory: "コース科目", compulsory: true, name: "情報工学実験I", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 40, subjectCategory: "コース科目", compulsory: false, name: "確率統計応用", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 41, subjectCategory: "コース科目", compulsory: false, name: "アルゴリズム論", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 42, subjectCategory: "コース科目", compulsory: false, name: "コンピュータアーキテクチャー", credits: 2, grade: "2年前期", priority: null },
            { take: false, id: 16, subjectCategory: "基礎科目", compulsory: false, name: "生物学基礎", credits: 2, grade: "2年後期", priority: null },
            { take: false, id: 28, subjectCategory: "学科共通科目", compulsory: false, name: "微分方程式応用", credits: 2, grade: "2年後期", priority: "応用物理" },
            { take: false, id: 29, subjectCategory: "学科共通科目", compulsory: false, name: "統計力学概論", credits: 2, grade: "2年後期", priority: "応用物理" },
            { take: false, id: 30, subjectCategory: "学科共通科目", compulsory: false, name: "電子回路学基礎", credits: 2, grade: "2年後期", priority: null },
            { take: false, id: 31, subjectCategory: "学科共通科目", compulsory: false, name: "情報理論", credits: 2, grade: "2年後期", priority: null },
            { take: false, id: 32, subjectCategory: "学科共通科目", compulsory: false, name: "制御工学基礎", credits: 2, grade: "2年後期", priority: null },
            { take: true, id: 43, subjectCategory: "コース科目", compulsory: true, name: "プログラミング実践I", credits: 2, grade: "2年後期", priority: null },
            { take: true, id: 44, subjectCategory: "コース科目", compulsory: true, name: "情報工学実験Ⅱ", credits: 2, grade: "2年後期", priority: null },
            { take: false, id: 45, subjectCategory: "コース科目", compulsory: false, name: "多変量解析", credits: 2, grade: "2年後期", priority: null },
            { take: false, id: 46, subjectCategory: "コース科目", compulsory: false, name: "オペレーティングシステム", credits: 2, grade: "2年後期", priority: null },
            { take: false, id: 47, subjectCategory: "コース科目", compulsory: false, name: "論理回路", credits: 2, grade: "2年後期", priority: null },
            { take: true, id: 17, subjectCategory: "基礎科目", compulsory: true, name: "電気電子・情報英語Ⅰ", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 33, subjectCategory: "学科共通科目", compulsory: false, name: "数値解析", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 34, subjectCategory: "学科共通科目", compulsory: false, name: "信号処理", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 35, subjectCategory: "学科共通科目", compulsory: false, name: "光学", credits: 2, grade: "3年前期", priority: "電気電子" },
            { take: true, id: 48, subjectCategory: "コース科目", compulsory: true, name: "プログラミング実践Ⅱ", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 49, subjectCategory: "コース科目", compulsory: false, name: "オートマン理論", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 50, subjectCategory: "コース科目", compulsory: false, name: "コンピュータネットワーク", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 51, subjectCategory: "コース科目", compulsory: false, name: "符号理論", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 52, subjectCategory: "コース科目", compulsory: false, name: "画像処理", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 53, subjectCategory: "コース科目", compulsory: false, name: "パターン認識", credits: 2, grade: "3年前期", priority: null },
            { take: false, id: 54, subjectCategory: "コース科目", compulsory: false, name: "暗号と情報セキュリティ", credits: 2, grade: "3年前期", priority: null },
            { take: true, id: 18, subjectCategory: "基礎科目", compulsory: true, name: "電気電子・情報英語Ⅱ", credits: 2, grade: "3年後期", priority: null },
            { take: false, id: 36, subjectCategory: "学科共通科目", compulsory: false, name: "通信工学", credits: 2, grade: "3年後期", priority: null },
            { take: false, id: 37, subjectCategory: "学科共通科目", compulsory: false, name: "計算機支援設計製図", credits: 2, grade: "3年後期", priority: "電気電子" },
            { take: true, id: 55, subjectCategory: "コース科目", compulsory: true, name: "情報工学セミナー", credits: 2, grade: "3年後期", priority: null },
            { take: true, id: 56, subjectCategory: "コース科目", compulsory: true, name: "情報工学実験Ⅲ", credits: 2, grade: "3年後期", priority: null },
            { take: false, id: 57, subjectCategory: "コース科目", compulsory: false, name: "ヒューマンインターフェイス", credits: 2, grade: "3年後期", priority: null },
            { take: false, id: 58, subjectCategory: "コース科目", compulsory: false, name: "人工知能", credits: 2, grade: "3年後期", priority: null },
            { take: false, id: 59, subjectCategory: "コース科目", compulsory: false, name: "機械学習", credits: 2, grade: "3年後期", priority: null },
            { take: false, id: 60, subjectCategory: "コース科目", compulsory: false, name: "データベース論", credits: 2, grade: "3年後期", priority: null },
            { take: false, id: 19, subjectCategory: "基礎科目", compulsory: false, name: "現代物理学概論", credits: 2, grade: "4年前期", priority: null },
            { take: false, id: 20, subjectCategory: "基礎科目", compulsory: false, name: "技術経営概論", credits: 2, grade: "4年前期", priority: null },
            { take: true, id: 38, subjectCategory: "学科共通科目", compulsory: true, name: "卒業研究", credits: 8, grade: "4年", priority: null },
            { take: false, id: 21, subjectCategory: "基礎科目", compulsory: false, name: "海外インターンシップ", credits: 2, grade: "全期間", priority: null },
        ],
        requirements: [
            { id: 0,isStatic:true, name: "①初年次セミナー", get: 2, border: 2, summable: 2, result: "OK", left: 2, message: "" },
            { id: 1,isStatic:false, name: "②人文科学:5", get: null, border: 6, summable: "-", result: null, left: 6, message: null },
            { id: 2,isStatic:false, name: "③社会科学*5", get: null, border: 6, summable: "-", result: null, left: 6, message: null },
            { id: 3,isStatic:false, name: "④自然科学*5", get: null, border: 4, summable: "-", result: null, left: 4, message: null },
            { id: 4,isStatic:false, name: "⑤複合領域", get: null, border: 2, summable: "-", result: null, left: 2, message: null },
            { id: 5,isStatic:false, name: "⑥スポーツ・健康科学", get: null, border: 2, summable: "-", result: null, left: 2, message: null },
            { id: 6,isStatic:true, name: "⑦外国語(英語＋2外)", get: 6, border: 6, summable: 6, result: "OK", left: 6, message: "" },
            { id: 7,isStatic:true, name: "⑧工学概論*4", get: 4, border: 4, summable: 4, result: "OK", left: 4, message: "" },
            { id: 8,isStatic:true, name: "⑨技術と技術者の倫理*4", get: 2, border: 2, summable: 2, result: "OK", left: 2, message: "" },
            { id: 9,isStatic:true, name: "⑩教養科目の合計", get: null, border: 34, summable: 38, result: null, left: 34, message: null },
            { id: 10,isStatic:true, name: "⑪工学部基礎科目", get: 0, border: 29, summable:"-", result: null, left: 29, message: null },
            { id: 11,isStatic:true, name: "⑫学科共通科目", get: null, border: 28, summable:"-", result: null, left: 28, message: null },
            { id: 12,isStatic:true, name: "⑬コース科目", get: null, border: 36, summable:"-", result: null, left: 36, message: null },
            { id: 13,isStatic:false, name: "　金型創生技術科目*1", get: null, border: 0, summable: 8, result: "OK", left: 0, message: "" },
            { id: 14,isStatic:false, name: "　航空宇宙生産技術科目*1", get: null, border: 0, summable: 15, result: "OK", left: 0, message: "" },
            { id: 15,isStatic:false, name: "　他学科開講科目*1*2", get: null, border: 0, summable: 10, result: "OK", left: 0, message: "" },
            { id: 16,isStatic:false, name: "　他大学での履修科目*1*2", get: null, border: 0, summable:4, result: "OK", left: 0, message: "" },
            { id: 17,isStatic:true, name: "⑭総単位数", get: null, border: 132, summable:"-", result: null, left: 132, message: null },

        ]
    },
    computed: {
        
        sumKiso() {
            const data = this.main;
            const result = data.filter(lecture => (lecture.take === true) && (lecture.subjectCategory === "基礎科目"));
            let sum = 0;
            for (let i in result) {
                sum += result[i].credits;
            }
            this.requirements[10].get = sum;
        },
        sumGakka() {
            const data = this.main;
            const result = data.filter(lecture => (lecture.take === true) && (lecture.subjectCategory === "学科共通科目"));
            let sum = 0;
            for (let i in result) {
                sum += result[i].credits;
            }
            this.requirements[11].get = sum;
        },
        sumKosu() {
            const data = this.main;
            const result = data.filter(lecture => (lecture.take === true) && (lecture.subjectCategory === "コース科目"));
            let sum = 0;
            for (let i in result) {
                sum += result[i].credits;
            }
            this.requirements[12].get = sum;
        },
        sumKyoyo() {
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += Number(this.requirements[i].get);
            }
            if(sum>this.requirements[9].summable){
                sum = this.requirements[9].summable;
            }
            this.requirements[9].get = sum;
        },
        sumAll() {
            const data = this.main;
            const result = data.filter(lecture => lecture.take === true);
            let sum = 0;
            //専門科目の合計
            for (let i in result) {
                sum += result[i].credits;
            }
            //教養科目の合計
            sum += this.requirements[9].get;
            
            //特別科目4種の合計
            for (let i = 13; i < 17; i++) {
                
                sum += Number(this.requirements[i].get);
            }
            this.requirements[17].get = sum;
        },
        resultKyoyoSum(){
            const data = this.requirements[9];

            let get = 0;
            for (let i = 0; i < 9; i++) {
                get += Number(this.requirements[i].get);
            }
            if(0<=get && get<data.border){
                this.requirements[9].result="NG"
                this.requirements[9].message="単位数が不足しています";
            }else if(get>data.summable){
                this.requirements[9].result="OK"
                this.requirements[9].message=(get-data.summable)+"単位超過しています！";
            }else if(get>=data.border){
                this.requirements[9].result="OK"
                this.requirements[9].message=null;
            }else{
                this.requirements[9].result="NG"
                this.requirements[9].message="取得単位数が不正です";
            }
        },
        resultKogakubu(){
            const data = this.requirements;
            for(i of [1,2,3,4,5,10,11,12,17]){
            const get = this.requirements[i].get;
            if(0<=get && get<data[i].border){
                this.requirements[i].result="NG";
                this.requirements[i].message="単位数が不足しています";
            }else if(get>=data[i].border){
                this.requirements[i].result="OK";
                this.requirements[i].message=null;
            }else{
                this.requirements[i].result="NG";
                this.requirements[i].message="取得単位数が不正です";
            }
        }
        },
        
        finalResult(){
            for(i in this.requirements){
                if(this.requirements[i].result!="OK"){
                    return "満たしていない条件があります。卒業できません。";
                }
            }
            return "この計画通り単位を取得すれば卒業できます。";
        }
    },
    methods:{
        resultKyoyo(id){
            const data = this.requirements;
            const get = data[id].get;
            if(0<=get && get<data[id].border){
                return ["NG","単位数が不足しています"];
            }else if(get>=data[id].border){
                return ["OK",""];
            }else{
                return ["NG","取得単位数が不正です"];
            }
        }
    }
})


const element = document.getElementsByClassName("item");
const gray = [13,14,15,16];
for(let j of gray){
    element[j].style="background-color: rgb(238, 238, 238);"
}

const blue = [9,17];
for(let j of blue){
    element[j].style="background-color: rgb(221, 237, 250);"
}

const red = [];
for(let j of red){
    element[j].style="background-color: rgb(250, 221, 221);"
}