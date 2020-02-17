module.exports = {"InsurCircle":{"abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"members","outputs":[{"name":"credit","type":"uint256"},{"name":"debit","type":"uint256"},{"name":"alive","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_MEMBER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EXPIRED_IN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"membersAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"organizer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"safetyHatchTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endOfROSCA","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"roundPeriodInSecs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"tokenContractAddress_","type":"address"},{"name":"organizer_","type":"address"},{"name":"roundPeriodInSecs_","type":"uint256"},{"name":"startTime_","type":"uint256"},{"name":"contributionSize_","type":"uint128"},{"name":"members_","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogContributionMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogFundsWithdrawal","type":"event"},{"anonymous":false,"inputs":[],"name":"LogEndOfROSCA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"}],"name":"LogDisabledMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Claimed","type":"event"},{"constant":false,"inputs":[],"name":"payForRound","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"toMember","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"closeCircle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"aMember","type":"address"}],"name":"disableMember","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526000600760146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162002b0b38038062002b0b833981018060405260c08110156200005257600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080516401000000008111156200009d57600080fd5b82810190506020810184811115620000b457600080fd5b8151856020820283011164010000000082111715620000d257600080fd5b505092919050505060008414158015620000ed575060018151115b8015620000fd5750610100815111155b62000170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f436f6e7374727563746f72206e6f7420706173732076616c69646174696f6e0081525060200191505060405180910390fd5b846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836003819055508260048190555081600560006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555085600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080905060008090505b82518160ff1610156200031d57828160ff1681518110620002a157fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415620002e757600191506200031d565b6200030f838260ff1681518110620002fb57fe5b6020026020010151620003b560201b60201c565b808060010191505062000284565b506301dfe200600454016008819055506000151581151514620003a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4f7267616e697a6572206d757374206e6f742062652061206d656d626572000081525060200191505060405180910390fd5b505050505050506200061e565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200045a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4e6f74206163636570742061646472657373205a65726f00000000000000000081525060200191505060405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff16156200051e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f557365722077617320616c72656479207265676973746572656400000000000081525060200191505060405180910390fd5b6040518060600160405280600081526020016000815260200160011515815250600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548160ff02191690831515021790555090505060028290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6124dd806200062e6000396000f3fe6080604052600436106101145760003560e01c806361203265116100a057806385860a701161006457806385860a70146104be578063a9059cbb146104ed578063c941778314610548578063e7c140aa14610573578063ffa1ad741461058a57610114565b8063612032651461035557806370a08231146103ac57806378e979251461041157806380a46cbe1461043c57806382edaf941461046757610114565b80633721b133116100e75780633721b133146101f05780634e71d92d1461021b57806355a373d6146102325780635918ba79146102895780635ee5a3c6146102da57610114565b806308ae4b0c1461011957806312065fe0146101905780632443b8c5146101bb57806329c404fa146101c5575b600080fd5b34801561012557600080fd5b506101686004803603602081101561013c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061061a565b6040518084815260200183815260200182151515158152602001935050505060405180910390f35b34801561019c57600080fd5b506101a5610651565b6040518082815260200191505060405180910390f35b6101c36107ab565b005b3480156101d157600080fd5b506101da6109b0565b6040518082815260200191505060405180910390f35b3480156101fc57600080fd5b506102056109b6565b6040518082815260200191505060405180910390f35b34801561022757600080fd5b506102306109be565b005b34801561023e57600080fd5b50610247610fc7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029557600080fd5b506102d8600480360360208110156102ac57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fed565b005b3480156102e657600080fd5b50610313600480360360208110156102fd57600080fd5b810190808035906020019092919050505061128b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036157600080fd5b5061036a6112c7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103b857600080fd5b506103fb600480360360208110156103cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112ec565b6040518082815260200191505060405180910390f35b34801561041d57600080fd5b5061042661143e565b6040518082815260200191505060405180910390f35b34801561044857600080fd5b50610451611444565b6040518082815260200191505060405180910390f35b34801561047357600080fd5b5061047c61144a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104ca57600080fd5b506104d3611470565b604051808215151515815260200191505060405180910390f35b3480156104f957600080fd5b506105466004803603604081101561051057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611483565b005b34801561055457600080fd5b5061055d6116f1565b6040518082815260200191505060405180910390f35b34801561057f57600080fd5b506105886116f7565b005b34801561059657600080fd5b5061059f611c00565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105df5780820151818401526020810190506105c4565b50505050905090810190601f16801561060c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60016020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900460ff16905083565b600080600073ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161490508061078c57600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561074c57600080fd5b505afa158015610760573d6000803e3d6000fd5b505050506040513d602081101561077657600080fd5b81019080805190602001909291905050506107a5565b3073ffffffffffffffffffffffffffffffffffffffff16315b91505090565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1661086d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4f6e6c79206d656d626572732063616e2061636365737320746869732e00000081525060200191505060405180910390fd5b600760149054906101000a900460ff16156108f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f436972636c6520697320656e646564000000000000000000000000000000000081525060200191505060405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600061093d611c39565b90508082600001600082825401925050819055506301dfe20042016008819055503373ffffffffffffffffffffffffffffffffffffffff167f5f811115c4ec5f41d18478505468d01b829326546e0ff4d150a9f9d8d2621cd4826040518082815260200191505060405180910390a25050565b61010081565b6301dfe20081565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff16610a80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4f6e6c79206d656d626572732063616e2061636365737320746869732e00000081525060200191505060405180910390fd5b600760149054906101000a900460ff1615610b03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f436972636c6520697320656e646564000000000000000000000000000000000081525060200191505060405180910390fd5b600854421015610b5e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806123896026913960400191505060405180910390fd5b6000809050600080600090505b6002805490508160ff161015610e3757610b83612365565b6001600060028460ff1681548110610b9757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900460ff161515151581525050905080604001518015610c8b57506000610c8960028460ff1681548110610c5957fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166112ec565b135b15610ce057610cd360028360ff1681548110610ca357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166112ec565b8301925083806001019450505b3373ffffffffffffffffffffffffffffffffffffffff1660028360ff1681548110610d0757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e29578060400151610dc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4d656d626572206973206e6f7420616c6976650000000000000000000000000081525060200191505060405180910390fd5b6000816020015182600001510311610e28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e81526020018061242a603e913960400191505060405180910390fd5b5b508080600101915050610b6b565b506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000610e85610651565b905060018460ff161415610f1157610e9d338261200d565b60008260020160006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a826040518082815260200191505060405180910390a250505050610fc5565b6000826001015483600001540390506000610f4785610f39848661225090919063ffffffff16565b6122d690919063ffffffff16565b9050610f53338261200d565b60008460020160006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a826040518082815260200191505060405180910390a25050505050505b565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4f6e6c79206f7267616e697a65722063616e2061636365737320746869732e0081525060200191505060405180910390fd5b600760149054906101000a900460ff1615611132576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f436972636c6520697320656e646564000000000000000000000000000000000081525060200191505060405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166111d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061248d6025913960400191505060405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160020160006101000a81548160ff0219169083151502179055506301dfe20042016008819055508173ffffffffffffffffffffffffffffffffffffffff167f554fead64278c38cff1d7ef4532444c7aab23166d2f04be05f7931ce046598be60405160405180910390a25050565b6002818154811061129857fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166113b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f55736572206973206e6f742061637469766520616e796d6f726500000000000081525060200191505060405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154039050919050565b60045481565b60085481565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4f6e6c79206f7267616e697a65722063616e2061636365737320746869732e0081525060200191505060405180910390fd5b600760149054906101000a900460ff16156115c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f436972636c6520697320656e646564000000000000000000000000000000000081525060200191505060405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1661166d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806124686025913960400191505060405180910390fd5b600081116116e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f56616c756520746f207472616e73666572206d7573742067742030000000000081525060200191505060405180910390fd5b6116ed828261200d565b5050565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4f6e6c79206f7267616e697a65722063616e2061636365737320746869732e0081525060200191505060405180910390fd5b600760149054906101000a900460ff161561183c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f436972636c6520697320656e646564000000000000000000000000000000000081525060200191505060405180910390fd5b606061010060405190808252806020026020018201604052801561186f5781602001602082028038833980820191505090505b50905060008090506000611881610651565b9050600080600090505b6002805490508160ff161015611a83576118a3612365565b6001600060028460ff16815481106118b757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900460ff161515151581525050905080604001516119675750611a76565b60028260ff168154811061197757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16868660ff16815181106119b157fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084806001019550506001600060028460ff1681548110611a0757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015483019250505b808060010191505061188b565b5060008090505b8360ff168160ff161015611bb257600060016000878460ff1681518110611aad57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506001850360ff168260ff161015611b6c576000816001015482600001540390506000611b3885611b2a848961225090919063ffffffff16565b6122d690919063ffffffff16565b90506000811115611b6457611b63888560ff1681518110611b5557fe5b602002602001015182611483565b5b505050611ba5565b6000611b76610651565b90506000811115611ba257611ba1878460ff1681518110611b9357fe5b602002602001015182611483565b5b50505b8080600101915050611a8a565b506001600760146101000a81548160ff0219169083151502179055507f0d7934a837a5352bf1f69c845e9630af79985e92d48ac8f7c684cadbcc56fe3e60405160405180910390a150505050565b6040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525081565b600080600073ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161490508080611c9d575060003411155b611cf2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123e76022913960400191505060405180910390fd5b600081611e0c57600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611dcc57600080fd5b505afa158015611de0573d6000803e3d6000fd5b505050506040513d6020811015611df657600080fd5b8101908080519060200190929190505050611e0e565b345b90506000811415611e87576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f56616c75652073686f756c64206265206774203000000000000000000000000081525060200191505060405180910390fd5b8115611e9757809250505061200a565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611f7457600080fd5b505af1158015611f88573d6000803e3d6000fd5b505050506040513d6020811015611f9e57600080fd5b8101908080519060200190929190505050612004576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806123af6038913960400191505060405180910390fd5b80925050505b90565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905081816001016000828254019250508190555060008073ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161490508015612109578373ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050158015612103573d6000803e3d6000fd5b506121ef565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156121b257600080fd5b505af11580156121c6573d6000803e3d6000fd5b505050506040513d60208110156121dc57600080fd5b8101908080519060200190929190505050505b6301dfe20042016008819055508373ffffffffffffffffffffffffffffffffffffffff167f734fcf7bef4b986ceeebbdc8134aaa082aa17a4c7309655da456b33ebe598abb846040518082815260200191505060405180910390a250505050565b60008083141561226357600090506122d0565b600082840290508284828161227457fe5b04146122cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806124096021913960400191505060405180910390fd5b809150505b92915050565b600080821161234d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b600082848161235857fe5b0490508091505092915050565b60405180606001604052806000815260200160008152602001600015158152509056fe4e6f74206174207468652072696768742074696d6520666f7220736166657479206861746368546f6b656e20636f6e74726163742073686f756c6420616c6c6f7720746f207472616e7366657220746f207468697320636f6e7472616374746f6b656e20436972636c652073686f756c64206e6f742061636365707420455448536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7743726564697420616d6f756e74206f66206d656d6265722073686f756c64206265206774207468616e206869732f68657220646562697420616d6f756e744f7267616e697a65722063616e207472616e7366657220746f206d656d626572206f6e6c7955736572206973206e6f74206163746976652c20756e61626c6520746f2064697361626c65a165627a7a72305820d44bdcb501be850307c20d7ec04f14b4f7de92c93141739aa69deff63670009b0029","sourceMap":"97:9050:0:-;;;748:5;723:30;;;;;;;;;;;;;;;;;;;;1682:1059;8:9:-1;5:2;;;30:1;27;20:12;5:2;1682:1059:0;;;;;;;;;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1682:1059:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;331:9;325:2;311:12;307:21;289:16;285:44;282:59;261:11;247:12;244:29;233:116;230:2;;;362:1;359;352:12;230:2;0:373;;1682:1059:0;;;;;;1998:1;1976:18;:23;;:46;;;;;2021:1;2003:8;:15;:19;1976:46;:79;;;;;237:3;2026:8;:15;:29;;1976:79;1968:123;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2113:10;2101:9;;:22;;;;;;;;;;;;;;;;;;2153:18;2133:17;:38;;;;2193:10;2181:9;:22;;;;2232:17;2213:16;;:36;;;;;;;;;;;;;;;;;;2295:21;2259:13;;:58;;;;;;;;;;;;;;;;;;2350:21;2327:20;;:44;;;;;;;;;;;;;;;;;;2381:12;2396:5;2381:20;;2416:7;2426:1;2416:11;;2411:205;2433:8;:15;2429:1;:19;;;2411:205;;;2487:8;2496:1;2487:11;;;;;;;;;;;;;;;;2473:25;;:10;:25;;;2469:101;;;2528:4;2518:14;;2550:5;;2469:101;2583:22;2593:8;2602:1;2593:11;;;;;;;;;;;;;;;;2583:9;;;:22;;:::i;:::-;2450:3;;;;;;;2411:205;;;;283:8;2643:9;;:22;2625:15;:40;;;;2694:5;2683:16;;:7;:16;;;2675:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1682:1059;;;;;;;97:9050;;7764:280;7838:9;1624:1;1605:21;;:7;:21;;;;1597:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7868:7;:18;7876:9;7868:18;;;;;;;;;;;;;;;:24;;;;;;;;;;;;7867:25;7859:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7955:40;;;;;;;;7969:1;7955:40;;;;7979:1;7955:40;;;;7989:4;7955:40;;;;;7934:7;:18;7942:9;7934:18;;;;;;;;;;;;;;;:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8005:16;8027:9;8005:32;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;8005:32:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7764:280;;:::o;97:9050::-;;;;;;;","source":"pragma solidity ^0.5.2;\n\nimport \"./deps/ERC20TokenInterface.sol\";\nimport \"./deps/SafeMath.sol\";\n\ncontract InsurCircle {\n    using SafeMath for uint256;\n\n    string public constant VERSION = \"0.0.1\";\n    uint public constant MAX_MEMBER = 256;\n    uint256 public constant EXPIRED_IN = 52 weeks;\n    address payable public organizer;\n    mapping(address => User) public members;\n    address payable[] public membersAddresses;  // for iterating through members' addresses\n\n    uint256 public roundPeriodInSecs;\n    uint256 public startTime;\n    uint128 internal contributionSize;\n    ERC20TokenInterface public tokenContract;  // public - allow easy verification of token contract.\n    address public tokenContractAddress;\n    bool public endOfROSCA = false;\n    uint256 public safetyHatchTime;\n\n    event LogContributionMade(address indexed user, uint256 amount);\n    event LogFundsWithdrawal(address indexed user, uint256 amount);\n    event LogEndOfROSCA();\n    event LogDisabledMember(address indexed user);\n    event Claimed(address indexed user, uint256 value);\n\n    struct User {\n        uint256 credit;  // total amount user has contributed\n        uint256 debit; // total amount user has withdrawed/borrowed\n        bool alive; // needed to check if a member is indeed a member\n    }\n\n    modifier onlyOrganizer {\n        require(msg.sender == organizer, \"Only organizer can access this.\");\n        _;\n    }\n\n    modifier onlyFromMember {\n        require(members[msg.sender].alive, \"Only members can access this.\");\n        _;\n    }\n\n    modifier onlyNonZeroAddress(address toCheck) {\n        require(toCheck != address(0), \"Not accept address Zero\");\n        _;\n    }\n    \n    constructor(\n          address tokenContractAddress_,  // pass 0 to use ETH\n          address payable organizer_,\n          uint256 roundPeriodInSecs_,\n          uint256 startTime_,\n          uint128 contributionSize_,\n          address payable[] memory members_\n    ) public {\n        require(roundPeriodInSecs_ != 0 && members_.length > 1 && members_.length <= MAX_MEMBER, \"Constructor not pass validation\");\n        organizer = organizer_;\n        roundPeriodInSecs = roundPeriodInSecs_;\n        startTime = startTime_;\n        contributionSize = contributionSize_;\n        tokenContract = ERC20TokenInterface(tokenContractAddress_);\n        tokenContractAddress = tokenContractAddress_;\n        bool isFound = false;\n        for (uint8 i = 0; i < members_.length; i++) {\n            if (organizer_ == members_[i]) {\n                isFound = true;\n                break;\n            }\n            addMember(members_[i]);\n        }\n        safetyHatchTime = startTime + EXPIRED_IN;\n        require(isFound == false, \"Organizer must not be a member\");\n    }\n\n    /**\n     * Member contribution, increase credit.\n     */\n    function payForRound() external payable onlyFromMember {\n        require(!endOfROSCA, \"Circle is ended\");\n        User storage member = members[msg.sender];\n        uint256 value = validateAndReturnContribution();\n        member.credit += value;\n        safetyHatchTime = now + EXPIRED_IN;\n        emit LogContributionMade(msg.sender, value);\n    }\n\n    /**\n     * Only organizer can transfer to member.\n     */\n    function transfer(address payable toMember, uint256 value) public onlyOrganizer {\n        require(!endOfROSCA, \"Circle is ended\");\n        require(members[toMember].alive, \"Organizer can transfer to member only\");\n        require(value > 0, \"Value to transfer must gt 0\");\n        doTransfer(toMember, value);\n    }\n\n    /**\n     * Only organizer can close the circle.\n     */\n    function closeCircle() external onlyOrganizer {\n        require(!endOfROSCA, \"Circle is ended\");\n        address payable[] memory eligibleMembers = new address payable[](MAX_MEMBER);\n        uint8 numEligible = 0;\n        uint256 contractBalance = getBalance();\n        // real balance in the contract is lte max balance\n        uint256 maxBalance;\n        for (uint8 i = 0; i < membersAddresses.length; i++) {\n            User memory member = members[membersAddresses[i]];\n            if (!member.alive) {\n                continue;\n            }\n            eligibleMembers[numEligible] = membersAddresses[i];\n            numEligible++;\n            maxBalance += members[membersAddresses[i]].credit;\n        }\n        for (uint8 i = 0; i < numEligible; i++) {\n            User storage member = members[eligibleMembers[i]];\n            if (i < numEligible - 1) {\n                uint256 memberBalance = member.credit - member.debit;\n                uint256 value = contractBalance.mul(memberBalance).div(maxBalance);\n                if (value > 0) {\n                    transfer(eligibleMembers[i], value);\n                }\n                continue;\n            }\n            // Last member should take his/her remmaining money in the contract\n            uint256 value = getBalance();\n            if (value > 0) {\n                transfer(eligibleMembers[i], value);\n            }\n        }\n        endOfROSCA = true;\n        emit LogEndOfROSCA();\n    }\n\n    /**\n     * Returns the balance of this contract, in ETH or the ERC20 token involved.\n     */\n    function getBalance() public view returns (uint256) {\n        bool isEthCircle = (tokenContractAddress == address(0));\n        return isEthCircle ? address(this).balance : tokenContract.balanceOf(address(this));\n    }\n\n    /**\n     * Return balance of a member.\n     */\n    function balanceOf(address user) public view returns (int256) {\n        require(members[user].alive, \"User is not active anymore\");\n        return int256(members[user].credit - members[user].debit);\n    }\n\n    /**\n     * If a member wants to quit, he needs to request organizer to do this.\n     */\n    function disableMember(address payable aMember) external onlyOrganizer {\n        require(!endOfROSCA, \"Circle is ended\");\n        require(members[aMember].alive, \"User is not active, unable to disable\");\n        User storage member = members[aMember];\n        member.alive = false;\n        safetyHatchTime = now + EXPIRED_IN;\n        emit LogDisabledMember(aMember);\n    }\n\n    function claim() external onlyFromMember {\n        require(!endOfROSCA, \"Circle is ended\");\n        require(now >= safetyHatchTime, \"Not at the right time for safety hatch\");\n        // if this is the last user, withdraw the remaining balance\n        uint8 numPositiveBalanceUser = 0;\n        // real balance in the contract is lte max balance\n        uint256 maxBalance;\n        for (uint8 i = 0; i < membersAddresses.length; i++) {\n            User memory member = members[membersAddresses[i]];\n            if (member.alive && balanceOf(membersAddresses[i]) > 0) {\n                maxBalance += uint256(balanceOf(membersAddresses[i]));\n                numPositiveBalanceUser++;\n            }\n            if (membersAddresses[i] == msg.sender) {\n                require(member.alive, \"Member is not alive\");\n                require(member.credit - member.debit > 0, \"Credit amount of member should be gt than his/her debit amount\");\n            }\n        }\n        // after the above for loop, user is eligible to claim\n        User storage member = members[msg.sender];\n        uint256 contractBalance = getBalance();\n        if (numPositiveBalanceUser == 1) {\n            doTransfer(msg.sender, contractBalance);\n            member.alive = false;\n            emit Claimed(msg.sender, contractBalance);\n            return;\n        }\n\n        // else withdraw based on ratio\n        uint256 memberBalance = member.credit - member.debit;\n        uint256 available = contractBalance.mul(memberBalance).div(maxBalance);\n        doTransfer(msg.sender, available);\n        member.alive = false;\n        emit Claimed(msg.sender, available);\n    }\n\n    function addMember(address payable newMember) internal onlyNonZeroAddress(newMember) {\n        require(!members[newMember].alive, \"User was alredy registered\");\n\n        members[newMember] = User({credit: 0, debit: 0, alive: true});\n        membersAddresses.push(newMember);\n    }\n\n    function validateAndReturnContribution() internal returns (uint256) {  // dontMakePublic\n        bool isEthCircle = (tokenContractAddress == address(0));\n        require(isEthCircle || msg.value <= 0, \"token Circle should not accept ETH\");\n\n        uint256 value = (isEthCircle ? msg.value : tokenContract.allowance(msg.sender, address(this)));\n        require(value != 0, \"Value should be gt 0\");\n\n        if (isEthCircle) {\n            return value;\n        }\n        require(tokenContract.transferFrom(msg.sender, address(this), value), \"Token contract should allow to transfer to this contract\");\n        return value;\n    }\n\n    function doTransfer(address payable toMember, uint256 value) internal {\n        User storage member = members[toMember];\n        member.debit += value;\n        bool isEthCircle = (tokenContractAddress == address(0));\n        if (isEthCircle) {\n            toMember.transfer(value);\n        } else {\n            tokenContract.transfer(toMember, value);\n        }\n        safetyHatchTime = now + EXPIRED_IN;\n        emit LogFundsWithdrawal(toMember, value);\n    }\n}","compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"schemaVersion":"3.0.16"}};