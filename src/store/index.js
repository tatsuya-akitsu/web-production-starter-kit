import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoading: false,
      isLoggined: false,
      completeOrder: false,
      completeEditOrder: false,
      completeProfile: false,
      setErrorName: false,
      setErrorNameLength: false,
      setErrorMail: false,
      setErrorMailReg: false,
      setErrorPasswordLength: false,
      setErrorPasswordReg: false,
      alreadyCreadential: false,
      order: {
        status: 'create', // 案件ステータス
        clientName: '', // クライアント名
        repName: '',  // 担当者名
        projectName: '',  // プロジェクト名
        deliveryMethod: '', // 納品方法
        deliveryDate: '', // 納品希望日
        hopeTime: '通常', // 希望制作期間
        hopeTimeDetail: '', // 希望制作期間詳細
        siteName: '', // サイト名
        siteDescription: '',  // サイトディスクリプション
        ogpText: '',  // OGPテキスト
        productionPurpose: [],  // 制作目的
        orderRange: [], // 依頼範囲
        age: [20, 40],  // 年齢層
        gender: '男性', //  性別
        employment: [
          '正社員',
          '契約社員',
          '派遣社員',
          'フリーランス',
          'パート・アルバイト',
          '大学生',
          '高校生',
          '主婦'
        ], // 職業
        checkedEmployment: [],  // チェック済み職業
        isEmployIndeterminate: true,  // 全ての職業チェック
        checkAllEmployment: false,  // 職業を全てチェック
        jobCategory: [
          '営業系',
          '企画・事務・管理系',
          '販売・接客・サービス系',
          '専門サービス系（医療・福祉・教育・その他）',
          '専門職系（コンサルタント・金融・不動産）',
          'クリエイティブ系',
          '技術系（IT・WEB・ゲーム・通信）',
          '技術系（電気・電子・機械）',
          '技術系（建築・土木）',
          '技術系（医療・化学・素材・食品）',
          '警備・清掃・設備管理・運輸・配送・軽作業系',
          '公務員・団体職員・その他'
        ],  // 職種
        checkedJobCategory: [], // チェック済み職種
        isJobCategoryIndeterminate: true, // 全ての職種チェック
        checkAllJobCategory: false, // 職種を全てチェック
        local: [
          '北海道地方',
          '東北地方',
          '関東地方',
          '中部地方',
          '近畿地方',
          '中国地方',
          '四国地方',
          '九州・沖縄地方'
        ],  // 地方圏
        checkedLocal: [], // チェック済み地方圏
        isLocalIndeterminate: true, // 全ての地方圏チェック
        checkAllLocal: false, // 地方圏を全てチェック
        useEnvironment: '静的サイト', // 使用プラットフォーム
        displayEnvironment: [
          'Android',
          'iOS',
          'Internet Explorer',
          'Opera',
          'Edge',
          'Safari',
          'Firefox',
          'Chrome'
        ],  // 表示プラットフォーム
        checkedDisplay: [], // チェック済み表示プラットフォーム
        isDisplayIndeterminate: true, // 全ての表示プラットフォームチェック
        checkAllDisplay: false, // 表示プラットフォームを全てチェック
        environmentVersion: '', // 各表示プラットフォームのバージョン
        responsive: [
          'スマートフォン',
          'タブレット',
          'ノートパソコン',
          'ラップトップ'
        ],  // レスポンシブ
        checkedResponsive: [],  // チェック済みレスポンシブ
        isResponsiveIndeterminate: true,  // 全てのレスポンシブチェック
        checkAllResponsive: false,  // レスポンシブを全てチェック
        referenceSite1: '', // 参考サイト1
        referenceSite2: '', // 参考サイト2
        referenceSite3: '', // 参考サイト3
        otherReferenceSite: '', // その他サイトイメージ
        requiredFeature: '',  // 必要機能
        imagePreparation: '新規作成', // 画像用意方法
        collectionImgUrl: '', // 画像回収サイトURL
        textPreparation: '新規作成',  // テキスト用意方法
        collectionTextUrl: '',  // テキスト回収URL
        copyright: '',  // コピーライト
        analytics: '',  // アナリティクス情報
        serverName: '', // サーバー名
        serverPassword: '', // サーバーパスワード
        controlLoginId: '', // サーバー管理画面ログインID
        controlLoginPassword: '', // サーバー管理画面ログインパスワード
        ftpServerName: '',  // FTPサーバー名
        ftpAccountName: '', // FTPアカウント名
        wordpressLoginId: '', // WordPressログインID
        wordpressLoginPassword: '', // WordPressログインパスワード
        otherLoginId: '', // その他アクセス制限ID
        otherLoginPassword: '', // その他アクセス制限パスワード
        memo: '', // 備考
      },
      editOrder: {
        status: 'create', // 案件ステータス
        clientName: '', // クライアント名
        repName: '',  // 担当者名
        projectName: '',  // プロジェクト名
        deliveryMethod: '', // 納品方法
        deliveryDate: '', // 納品希望日
        hopeTime: '通常', // 希望制作期間
        hopeTimeDetail: '', // 希望制作期間詳細
        siteName: '', // サイト名
        siteDescription: '',  // サイトディスクリプション
        ogpText: '',  // OGPテキスト
        productionPurpose: [],  // 制作目的
        orderRange: [], // 依頼範囲
        age: [20, 40],  // 年齢層
        gender: '男性', //  性別
        employment: [
          '正社員',
          '契約社員',
          '派遣社員',
          'フリーランス',
          'パート・アルバイト',
          '大学生',
          '高校生',
          '主婦'
        ], // 職業
        checkedEmployment: [],  // チェック済み職業
        isEmployIndeterminate: true,  // 全ての職業チェック
        checkAllEmployment: false,  // 職業を全てチェック
        jobCategory: [
          '営業系',
          '企画・事務・管理系',
          '販売・接客・サービス系',
          '専門サービス系（医療・福祉・教育・その他）',
          '専門職系（コンサルタント・金融・不動産）',
          'クリエイティブ系',
          '技術系（IT・WEB・ゲーム・通信）',
          '技術系（電気・電子・機械）',
          '技術系（建築・土木）',
          '技術系（医療・化学・素材・食品）',
          '警備・清掃・設備管理・運輸・配送・軽作業系',
          '公務員・団体職員・その他'
        ],  // 職種
        checkedJobCategory: [], // チェック済み職種
        isJobCategoryIndeterminate: true, // 全ての職種チェック
        checkAllJobCategory: false, // 職種を全てチェック
        local: [
          '北海道地方',
          '東北地方',
          '関東地方',
          '中部地方',
          '近畿地方',
          '中国地方',
          '四国地方',
          '九州・沖縄地方'
        ],  // 地方圏
        checkedLocal: [], // チェック済み地方圏
        isLocalIndeterminate: true, // 全ての地方圏チェック
        checkAllLocal: false, // 地方圏を全てチェック
        useEnvironment: '静的サイト', // 使用プラットフォーム
        displayEnvironment: [
          'Android',
          'iOS',
          'Internet Explorer',
          'Opera',
          'Edge',
          'Safari',
          'Firefox',
          'Chrome'
        ],  // 表示プラットフォーム
        checkedDisplay: [], // チェック済み表示プラットフォーム
        isDisplayIndeterminate: true, // 全ての表示プラットフォームチェック
        checkAllDisplay: false, // 表示プラットフォームを全てチェック
        environmentVersion: '', // 各表示プラットフォームのバージョン
        responsive: [
          'スマートフォン',
          'タブレット',
          'ノートパソコン',
          'ラップトップ'
        ],  // レスポンシブ
        checkedResponsive: [],  // チェック済みレスポンシブ
        isResponsiveIndeterminate: true,  // 全てのレスポンシブチェック
        checkAllResponsive: false,  // レスポンシブを全てチェック
        referenceSite1: '', // 参考サイト1
        referenceSite2: '', // 参考サイト2
        referenceSite3: '', // 参考サイト3
        otherReferenceSite: '', // その他サイトイメージ
        requiredFeature: '',  // 必要機能
        imagePreparation: '新規作成', // 画像用意方法
        collectionImgUrl: '', // 画像回収サイトURL
        textPreparation: '新規作成',  // テキスト用意方法
        collectionTextUrl: '',  // テキスト回収URL
        copyright: '',  // コピーライト
        analytics: '',  // アナリティクス情報
        serverName: '', // サーバー名
        serverPassword: '', // サーバーパスワード
        controlLoginId: '', // サーバー管理画面ログインID
        controlLoginPassword: '', // サーバー管理画面ログインパスワード
        ftpServerName: '',  // FTPサーバー名
        ftpAccountName: '', // FTPアカウント名
        wordpressLoginId: '', // WordPressログインID
        wordpressLoginPassword: '', // WordPressログインパスワード
        otherLoginId: '', // その他アクセス制限ID
        otherLoginPassword: '', // その他アクセス制限パスワード
        memo: '', // 備考
      }
    },
    mutations: {
      loggined (state) {
        state.isLoggined = true
      },
      logout (state) {
        state.isLoggined = false
      },
      inLoading (state) {
        state.isLoading = true
      },
      outLoading (state) {
        state.isLoading = false
      },
      update (state, data) {
        state.editOrder.clientName = data.clientName
        state.editOrder.repName = data.repName
        state.editOrder.projectName = data.projectName
        state.editOrder.deliveryMethod = data.deliveryMethod
        state.editOrder.deliveryDate = data.date
        state.editOrder.hopeTime = data.hopeTime
        state.editOrder.hopeTimeDetail = data.hopeTimeDetail
        state.editOrder.siteName = data.siteName
        state.editOrder.siteDescription = data.siteDescription
        state.editOrder.ogpText = data.ogpText
        state.editOrder.productionPurpose = data.productionPurpose
        state.editOrder.orderRange = data.orderRange
        state.editOrder.age = data.age
        state.editOrder.gender = data.gender
        state.editOrder.checkedEmployment = data.checkedEmployment
        state.editOrder.checkedJobCategory = data.checkedJobCategory
        state.editOrder.checkedLocal = data.checkedLocal
        state.editOrder.useEnvironment = data.useEnvironment
        state.editOrder.checkedDisplay = data.checkedDisplay
        state.editOrder.checkedResponsive = data.checkedResponsive
        state.editOrder.referenceSite1 = data.refarence[0]
        state.editOrder.referenceSite2 = data.refarence[1]
        state.editOrder.referenceSite3 = data.refarence[2]
        state.editOrder.otherReferenceSite = data.otherReferenceSite
        state.editOrder.requiredFeature = data.requiredFeature
        state.editOrder.imagePreparation = data.imagePreparation
        state.editOrder.collectionImgUrl = data.collectionImgUrl
        state.editOrder.textPreparation = data.textPreparation
        state.editOrder.collectionTextUrl = data.collectionTextUrl
        state.editOrder.copyright = data.copyright
        state.editOrder.analytics = data.analytics
        state.editOrder.serverName = data.serverName
        state.editOrder.serverPassword = data.serverPassword
        state.editOrder.controlLoginId = data.controlLoginId
        state.editOrder.controlLoginPassword = data.controlLoginPassword
        state.editOrder.ftpServerName = data.ftpServerName
        state.editOrder.ftpAccountName = data.ftpAccountName
        state.editOrder.wordpressLoginId = data.wordpressLoginId
        state.editOrder.wordpressLoginPassword = data.wordpressLoginPassword
        state.editOrder.otherLoginId = data.otherLoginId
        state.editOrder.otherLoginPassword = data.otherLoginPassword
        state.editOrder.memo = data.memo
      },
      completeOrder (state) {
        state.completeOrder = true
      },
      completeEditOrder (state) {
        state.completeEditOrder = true
      },
      updateProfile (state) {
        state.completeProfile = true
      },
      errorConsole (state, value) {
        if (value === 'nameLength') {
          state.setErrorNameLength = true
        } else if (value === 'nameReg') {
          state.setErrorName = true
        } else if (value === 'mailLength') {
          state.setErrorMail = true
        } else if (value === 'mailReg') {
          state.setErrorMailReg = true
        } else if (value === 'passwordLength') {
          state.setErrorPasswordLength = true
        } else if (value === 'passwordReg') {
          state.setErrorPasswordReg = true
        }
      },
      alreadyLoggined (state) {
        state.alreadyCreadential = true
      } 
    }
  })
}

export default createStore
