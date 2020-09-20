let resultFlag = {

};
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
        // other: {
        //     jinbun: 0,
        //     syakai: 0,
        //     shizen: 0,
        //     hukugou: 0,
        //     sports: 0,
        //     kanagata: 0,
        //     koukuu: 0,
        //     tagakka: 0,
        //     tadaigaku: 0
        // },
        requirements: [
            { id: 0, name: "初年次セミナー", get: 2, border: 2, summable: 2, result: "OK", left: 2, message: "" },
            { id: 1, name: "人文科学", get: null, border: 6, summable: "-", result: null, left: 6, message: null },
            { id: 2, name: "社会科学", get: null, border: 6, summable: "-", result: null, left: 6, message: null },
            { id: 3, name: "自然科学", get: null, border: 4, summable: "-", result: null, left: 4, message: null },
            { id: 4, name: "複合領域", get: null, border: 2, summable: "-", result: null, left: 2, message: null },
            { id: 5, name: "スポーツ・健康科学", get: null, border: 2, summable: "-", result: null, left: 2, message: null },
            { id: 6, name: "外国語(英語＋2外)", get: 6, border: 6, summable: 6, result: "OK", left: 6, message: "" },
            { id: 7, name: "工学概論", get: 4, border: 4, summable: 4, result: "OK", left: 4, message: "" },
            { id: 8, name: "技術と技術者の倫理*4", get: 2, border: 2, summable: 2, result: "OK", left: 2, message: "" },
            { id: 9, name: "教養科目の合計*4", get: null, border: 34, summable: 38, result: null, left: 34, message: null },
            { id: 10, name: "工学部基礎科目", get: null, border: 29, summable:"-", result: null, left: 29, message: null },
            { id: 11, name: "学科共通科目", get: null, border: 28, summable:"-", result: null, left: 28, message: null },
            { id: 12, name: "コース科目", get: null, border: 36, summable:"-", result: null, left: 36, message: null },
            { id: 13, name: "　金型創生技術科目*1", get: null, border: 0, summable: 8, result: "OK", left: 0, message: "" },
            { id: 14, name: "　航空宇宙生産技術科目*1", get: null, border: 0, summable: 15, result: "OK", left: 0, message: "" },
            { id: 15, name: "　他学科開講科目*1*2", get: null, border: 0, summable: 10, result: "OK", left: 0, message: "" },
            { id: 16, name: "　他大学での履修科目*1*2", get: null, border: 0, summable:4, result: "OK", left: 0, message: "" },
            { id: 17, name: "総単位数", get: null, border: 132, summable:"-", result: null, left: 132, message: null },

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
            return sum;
        },
        sumGakka() {
            const data = this.main;
            const result = data.filter(lecture => (lecture.take === true) && (lecture.subjectCategory === "学科共通科目"));
            let sum = 0;
            for (let i in result) {
                sum += result[i].credits;
            }
            return sum;
        },
        sumKosu() {
            const data = this.main;
            const result = data.filter(lecture => (lecture.take === true) && (lecture.subjectCategory === "コース科目"));
            let sum = 0;
            for (let i in result) {
                sum += result[i].credits;
            }
            return sum;
        },
        sumKyoyo() {
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += Number(this.requirements[i].get);
            }
            if(sum>this.requirements[9].summable){
                sum = this.requirements[9].summable+"("+sum+")";
            }
            return sum;
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
            sum += this.sumKyoyo;
            
            //特別科目4種の合計
            for (let i = 13; i < 17; i++) {
                
                sum += Number(this.requirements[i].get);
            }
            return sum;
        },
        resultKyoyoSum(){
            const data = this.requirements[9];

            let get = 0;
            for (let i = 0; i < 9; i++) {
                get += Number(this.requirements[i].get);
            }
            if(0<=get && get<data.border){
                return ["NG","単位数が不足しています"];
            }else if(get>data.summable){

                return ["OK","算入可能単位数を"+(get-data.summable)+"超過しています"];
            }else if(get>=data.border){
                return ["OK",""];
            }else{
                return ["NG","取得単位数が不正です"];
            }
        },
        resultKogakubuKiso(){
            const data = this.requirements;
            const get = this.sumKiso;
            if(0<=get && get<data[10].border){
                return ["NG","単位数が不足しています"];
            }else if(get>=data[10].border){
                return ["OK",""];
            }else{
                return ["NG","取得単位数が不正です"];
            }
        },
        resultGakka(){
            const data = this.requirements;
            const get = this.sumGakka;
            if(0<=get && get<data[11].border){
                return ["NG","単位数が不足しています"];
            }else if(get>=data[11].border){
                return ["OK",""];
            }else{
                return ["NG","取得単位数が不正です"];
            }
        },
        resultKosu(){
            const data = this.requirements;
            const get = this.sumKosu;
            if(0<=get && get<data[12].border){
                return ["NG","単位数が不足しています"];
            }else if(get>=data[12].border){
                return ["OK",""];
            }else{
                return ["NG","取得単位数が不正です"];
            }
        },
        resultFinal(){

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