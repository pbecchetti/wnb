import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ListService } from "./list.service";

describe("ListService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: ListService = TestBed.get(ListService);
    expect(service).toBeTruthy();
  });
});
