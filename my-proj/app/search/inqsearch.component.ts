export class InqSearchComponent{
      ein:number;
      policynumber:number;
      sourcecode:string;
      inqid:number;
      firstname:string;
      cdbRefId:number;

    constructor(obj?: any) {

      this.ein = obj && obj.ein || null;
      this.policynumber = obj && obj.policynumber || null;
      this.inqid = obj && obj.inqid || null;
      this.firstname = obj && obj.firstname || null;
      this.cdbRefId = obj && obj.cdbRefId || null;

  }
}