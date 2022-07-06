export function navNames(key){
  let data = {
    Dashboard: {title:'Dashboard', pages:['Dashboard']},
    Language: {title:'Language', pages:['Admin','Language']},
    AddLanguage: {title:'Language', pages:['Admin','Language']},
    EditLanguage: {title:'Language', pages:['Admin','Language']},
    PurchaseOrder: {title:'Purchase Order', pages:['Pembelian','Purchase Order']},
    AddPurchaseOrder: {title:'Purchase Order', pages:['Pembelian','Purchase Order']},
    EditPurchaseOrder: {title:'Purchase Order', pages:['Pembelian','Purchase Order']},
    PurchasingReport: {title:'Report Purchasing', pages:['Pembelian','Report Purchasing']}
  }

  return data[key] ? data[key] : {};
}

export function navSelected(key){
  let data = {
    Dashboard: {
      parent: 'Dashboard',
      self: 'Dashboard'
    },
    Language: {
      parent: 'Language',
      self: 'Language'
    },
    AddLanguage: {
      parent: 'Language',
      self: 'Language'
    },
    EditLanguage: {
      parent: 'Language',
      self: 'Language'
    },
    PurchaseOrder: {
      parent: 'PurchaseOrder',
      self: 'PurchaseOrder'
    },
    AddPurchaseOrder: {
      parent: 'PurchaseOrder',
      self: 'PurchaseOrder'
    },
    EditPurchaseOrder: {
      parent: 'PurchaseOrder',
      self: 'PurchaseOrder'
    },
    PurchasingReport: {
      parent: 'PurchaseOrder',
      self: 'PurchasingReport'
    },
  }

  return data[key] ? data[key] : {};
}
